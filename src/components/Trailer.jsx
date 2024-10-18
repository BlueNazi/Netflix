import React from "react";
import Modal from 'react-modal';
import "../App.css";
import Youtube from "react-youtube";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Trailer({ movieId }) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [trailerKey, setTrailerKey] = React.useState(""); 

    function openModal() {
        fetchTrailer(); 
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const fetchTrailer = () => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&language=en-US`)
            .then(res => res.json())
            .then(data => {
                const trailer = data.results.find(video => video.type === "Trailer"); 
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <button onClick={openModal} className="modal">Play Trailer</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                {trailerKey && ( 
                    <Youtube videoId={trailerKey} />
                )}
            </Modal>
        </div>
    );
}

export default Trailer;

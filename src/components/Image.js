const Image = ({ id, alt_description, urls: { regular },handleZoom, zoomId }) => {
 
    return (
        <img key={id}
            className={zoomId === id ? 'zoom' : 'nozoom'}
            src={regular} alt={alt_description}
            onClick={() => handleZoom(id)} />)
};

export default Image;

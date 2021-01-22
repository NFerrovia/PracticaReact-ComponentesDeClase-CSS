import React from 'react';

class ImageCard extends React.Component {
  // inicialización para el componente de clase.
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  // componentDiDMount se ejecuta solo cuando el componente de clase se inicia.

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // Customización de la grilla de imagenes, de tal manera que las imagenes no se
  // superpongan o queden desprolijamente alineadas ya que unsplash no entrega
  // todas las imagenes en un mismo tamaño.

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

const HeroSection = () => {

return (
    <main className="hero container">
        <div className="hero-content">
            <h1>SEUS PÉS MERECEM</h1>
            <p>SEUS PÉS MERECEM O MELHOR E ESTAMOS AQUI PARA AJUDÁ-LO COM NOSSOS
                SAPATOS.
            </p>

            <div className="hero-button">
                <button>Compre Agora</button>
                <button className="secondary-btn">Categoria</button>
            </div>

            <div className="shopping">
                <p>Também Disponível Em</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo"/>
                </div>
            </div>

        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-image" />
        </div>
    </main>
    )
};

export default HeroSection;
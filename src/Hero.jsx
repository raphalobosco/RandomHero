
export default function Hero({ heroName, heroImg, publisher }) {

    return (
        <div className="mx-auto my-5" style={{ maxWidth: '480px' }}>
            <div className="card">
                <img className="card-img-top" src={heroImg} alt="" style={{ height: '360px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h2 className="card-title"> {heroName}</h2>
                    <p className="card-text">Publisher: {publisher}</p>
                </div>
            </div>

        </div >
    )
}




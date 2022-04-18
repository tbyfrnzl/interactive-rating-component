'use strict';

function RatingApp() {
    const [ratingDone, setRatingDone] = React.useState(false);

    const onSubmit = () => {
        setRatingDone(true)
    }

    return (
        <React.Fragment>
            {!ratingDone && <RatingComponent onSubmitCallback={onSubmit}/>}
            {ratingDone && <ThankYouComponent />}
        </React.Fragment>
    )

}

function RatingComponent({onSubmitCallback, onRatingCallback}) {
    const [rating, setRating] = React.useState(1);

    const chooseRating = (rating) => {
        setRating(rating);

        onRatingCallback(rating);
    }

    const getSelected = (value) => {
        return value === rating;
    }   

    return (
        <div className="card card__rating">
            <img src="images/icon-star.svg" alt="An orange star icon." />
            <h2>How did we do?</h2>
            <p className="text">Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!</p>
            <div className="rating__controls">
                <button className={`rating__button ${getSelected(1) ? 'selected' : ''}`}>1</button>
                <button className={`rating__button ${getSelected(2) ? 'selected' : ''}`}>2</button>
                <button className={`rating__button ${getSelected(3) ? 'selected' : ''}`}>3</button>
                <button className={`rating__button ${getSelected(4) ? 'selected' : ''}`}>4</button>
                <button className={`rating__button ${getSelected(5) ? 'selected' : ''}`}>5</button>
            </div>
            <button className="submit__button" onClick={onSubmitCallback}>Submit</button>
        </div>
    )
}

function ThankYouComponent() {

    return (
        <div className="card card__thank-you">
            <img src="images/illustration-thank-you.svg" alt="An illustration of a phone with a receipt coming out." />
            <div className="rating__summary">You selected x out of 5</div>
            <h2>Thank you!</h2>

            <p className="text">We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!</p>
        </div>
    )
}

const container = document.getElementById('react_container');
const root = ReactDOM.createRoot(container);
root.render(<RatingApp />);
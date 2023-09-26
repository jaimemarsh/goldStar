import React from "react";

const Form = () => {
    const [result, setResult] = React.useState("");
    const [isFormValid, setIsFormValid] = React.useState(true); 

    const onSubmit = async (event) => {
        event.preventDefault();

        // Check if all required fields are filled out
        const formData = new FormData(event.target);
        const requiredFields = ["SendersName", "SendersEmail", "GoldStarName", "GoldStarEmail", "Message"];

        for (const field of requiredFields) {
            if (!formData.get(field)) {
                setIsFormValid(false);
                setResult("Error");
                return;
            }
        }

        setIsFormValid(true);
        setResult("Sending....");
        formData.append("access_key", "80366618-eb41-4c1d-8929-efdfc0727258");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult("Thank you for submitting a Gold Star!");
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return (
        <div className="container is-max-widescreen section">
            <div className="section is-small">
                <h1 className="title google-font-pd is-size-1 is-size-1-mobile has-text-centered">
                    How it Works
                </h1>
                <p className="google-font-ss is-size-5 has-text-centered">
                    Fill out this form with your information and the information of the
                    person you want to send a gold star to. That is all you need to do!
                    Once the form is submitted please give 3 work days for the star to be
                    sent with the information you provided. There is no limit to the
                    amount of stars you can send!
                </p>
            </div>
            <div className="App">
                <h1 className="is-size-2 google-font-pd my-4">Section for Gold Star <span><u>Sender:</u></span></h1>
                <form onSubmit={onSubmit}>
                    <div className="field columns">
                        <div className="column">
                            <h1 className="is-size-4 google-font-ss">Full Name:</h1>
                            <input className="input" type="text" name="SendersName" placeholder="Full name" required />
                        </div>
                        <div className="column">
                            <h1 className="is-size-4 google-font-ss">Email Address:</h1>
                            <input className="input" type="email" name="SendersEmail" placeholder="Email Address" required />
                        </div>
                    </div>

                    <h1 className="is-size-2 google-font-pd my-4">Section for Gold Star <span><u>Receiver:</u></span></h1>

                    <div className="field columns">
                        <div className="column">
                            <h1 className="is-size-4 google-font-ss">Full Name</h1>
                            <input className="input" type="text" name="GoldStarName" placeholder="Full Name" required />
                        </div>
                        <div className="column">
                            <h1 className="is-size-4 google-font-ss">Email Address</h1>
                            <input className="input" type="email" name="GoldStarEmail" placeholder="Email Address" required />
                        </div>
                    </div>
                    <h1 className="is-size-4 google-font-ss">Please include information such as why you want a gold star to be sent, your
                        relationship to them, and anything you might want included in the star.</h1>
                    <textarea className="textarea" name="Message" placeholder="For example: I want to send my Mom a gold star because she always does a great job. Can you put on the gold star that she is amazing in the color blue?"></textarea>

                    <button className="button is-warning m-4" type="submit">Send!</button>
                    {isFormValid ? null : <div className="has-text-danger">Please fill out all required fields so we can make the best gold star possible!</div>}
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Form;

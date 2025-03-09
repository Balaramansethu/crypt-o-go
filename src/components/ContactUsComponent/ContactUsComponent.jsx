import React from "react"
import "../ContactUsComponent/ContactUsComponent.css"
const ContactUsComponent = () => {
    return (
        <div className="container-contact-us">
            <div>
                <b>Contact Us</b>
            </div>
            <div>
                We're here to assist you with any inquiries, support needs,
                media requests, partnership opportunities, or career inquiries
                you may have. Feel free to reach out to us using the following
                email address:
            </div>
            <div>
                <b>Email: crypto-go@yourwebsite.com</b>
            </div>
            <div>
                {" "}
                Additionally, if you encounter any issues with our services or
                products, our customer support team is ready to assist you
                promptly. For media inquiries, please contact our media
                relations team, and for business partnerships or collaboration
                opportunities, reach out to our business development team. If
                you're interested in joining our team, you can submit your
                resume to our careers email address.{" "}
            </div>
            <div className="address">
                <div>
                    We value your feedback and look forward to hearing from you!
                </div>
                <hr style={{ margin: "15px" }}></hr>
                <div>91 Elm Street,</div>
                <div>Chicogo, USA,</div>
                <div>5th block</div>
            </div>
        </div>
    )
}

export default ContactUsComponent

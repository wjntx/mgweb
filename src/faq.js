import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const LoV = process.env.PUBLIC_URL + './PDF/LoV.pdf';

const Styles = styled.div`
h1 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
}

h2 {
    color: #72192d;
    font-size: 1.35rem;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
}

h4 {
    color: #72192d;
    font-size: 1.5rem;
    font-weight: 600;
}

h5 {
    font-size: 1.25rem;
}

.ulFormat {
    padding-top: 10px;
    padding-bottom: 15px;
}

.toggleLink {
    color: #72192d;
    text-decoration: none;
    &:hover {
        color: black;
        font-weight: 500;
    }
}

.subhead {
    color: black;
    font-size: 1.15rem;
    font-weight: 600;
    padding-bottom: 10px;
}

.subhead2 {
    color: dark grey;
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 10px;
}

.q {
    color: #72192d;
    display: inline;
    font-weight: 600;
}

hr {
    padding: 0;
}

.subNote2 {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 5px;
}

.displayImage{
    height:270px;
    width:300px;
   }

a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}

.text-link {
    font-weight: 500;
}
`;

function faq() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Frequently Asked Questions</h1>
            <hr />
            <div className="q">Q: How do I place an order with MicroGate?</div> <br />
            A: To place an order, simply email, fax or call MicroGate with your order request and we will get you the current pricing and shipping costs for the invoice total. You can contact us by telephone at 800.444.1982 / +1.512.345.7791 or by email at sales@microgate.com. Our fax number is +1.512.343.9046.<br /><br />


            <div className="q">Q: Are the SyncLink products available thru Resellers, VARs or Distributors?</div><br />
            A: MicroGate designs, manufactures and markets directly the complete line of SyncLink specialized serial adapters and Software Development Kits that are found on the MicroGate website. We also make sure our products are available in all channels of distribution. Contact any hardware or software supplier that you currently work with and ask for the SyncLink products by name. You may always contact MicroGate at any time to place an order directly.<br /><br />


            <div className="q">Q: Do you sell to the Government?</div><br />
            A: Absolutely. MicroGate's CAGE CODE is 67ZW9. This information and other government purchasing information can be found on the "Sales" information page. Contact MicroGate by telephone at 800.444.1982 or +1.512.345.7791 for current pricing. You may also contact us at any time by email at government_sales@microgate.com.<br /><br />


            <div className="q">Q: What warranty comes with SyncLink products?</div><br />
            A: All SyncLink products carry a five (5) year factory warranty from the date on the invoice, unless specifically identified differently under a supply contract or other special requirement. For full warranty details, consult your invoice and the User's Guide supplied with the product. You can also find the User's Guide for any SyncLink product on the webpages of this site.<br /><br />


            <div className="q">Q: How do I receive support?</div><br />
            A: Simply contact MicroGate by telephone at +1.512.345.7796. Often the best way to describe your questions or coding questions is to contact us by email. By email you can include code snippets and trace information to help us help you more quickly.<br /><br />

            Because you are purchasing a MicroGate manufactured product, you have direct access to the hardware and software engineers responsible for the product. Never hesitate to contact us for support - We are here to help!<br /><br />


            <div className="q">Q: Does MicroGate have a return policy?</div><br />
            A: If for at any reason you are not completely satisfied with the functionality of any purchase from MicroGate, you may return the product within the first 30-days of the date on the invoice. Because these purchases involve software development on your part and that requires special assistance from MicroGate, we must charge a 15% restocking fee. Contact MicroGate if you have any questions about this return policy.<br /><br />


            <div className="q">Q: How can I tell if the MicroGate Serial API and SyncLink adapter will work for my application?</div><br />
            A: MicroGate makes available for FREE download both the Windows and the Linux SDKs. These packages contain complete documentation, sample applications and source code. By making the complete development kit available, you will be able to determine what efforts on your part will be needed to complete your project.<br /><br />

            Because you are purchasing a MicroGate manufactured product, you have direct access to the hardware and software engineers responsible for the product. Never hesitate to contact us for support - We are here to help!<br /><br />


            <div className="q">Q: I can't find a part number I'm needing to order or find more information about this product on the website?</div><br />
            A: MicroGate custom manufactures solutions for many customers in many different industries. If you are not able to quickly find the information you are seeking, simply contact MicroGate directly by telephone or email to get the details you need.<br /><br />


            <div className="q">Q: I need a Letter of Volatility</div><br />
            A: Information regarding the use of nonvolatile components is found in the <a href={LoV} target="_blank" rel="noopener noreferrer">Letter of Volatility</a><br /><br />

            <br />
            <h3>"Customer Driven, by Design"</h3>
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default faq;
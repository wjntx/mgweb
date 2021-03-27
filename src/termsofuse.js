import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/pc104-small-rohs.jpg';

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

function termsofuse() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Terms Of Use</h1>
            <hr />
            <br /><h5>Overview</h5><br />
            The following are terms of a legal agreement between you and MicroGate Systems, Ltd. By accessing, browsing, or using this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern MicroGate Systems, Ltd. relationship with you in relation to this website. The term ‘COMPANY’ or ‘MicroGate’ or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.
            <br /><br />
            <div className="subhead">The use of this website is subject to the following terms of use:</div>
                <ul className="ulFormat">
                <li>MicroGate Systems, Ltd. may, without notice to you, at any time revise these Terms of Use and any other information contained in this website by updating this posting. MicroGate Systems, Ltd. may also make improvements or changes in the products, services, or programs described in this site at any time without notice.</li>
                <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                <li>All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
                <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                <li>You may not create a link to this website from another website or document without MicroGate Systems, Ltd. prior written consent.</li>
            </ul>
            <div className="subhead">DISCLAIMER OF WARRANTY</div>
            USE OF THIS SITE IS AT YOUR SOLE RISK. ALL MATERIALS, INFORMATION, PRODUCTS, SOFTWARE, PROGRAMS, AND SERVICES ARE PROVIDED "AS IS," WITH NO WARRANTIES OR GUARANTEES WHATSOEVER. MICROGATE SYSTEMS, LTD EXPRESSLY DISCLAIMS TO THE FULLEST EXTENT PERMITTED BY LAW ALL EXPRESS, IMPLIED, STATUTORY, AND OTHER WARRANTIES, GUARANTEES, OR REPRESENTATIONS, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF PROPRIETARY AND INTELLECTUAL PROPERTY RIGHTS. WITHOUT LIMITATION, MICROGATE SYSTEMS, LTD. MAKES NO WARRANTY OR GUARANTEE THAT THIS WEB SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. YOU UNDERSTAND AND AGREE THAT IF YOU DOWNLOAD OR OTHERWISE OBTAIN MATERIALS, INFORMATION, PRODUCTS, SOFTWARE, PROGRAMS, OR SERVICES, YOU DO SO AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGES THAT MAY RESULT, INCLUDING LOSS OF DATA OR DAMAGE TO YOUR COMPUTER SYSTEM. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF WARRANTIES, SO THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
            <br /><br />
            <div className="subhead">LIMITATION OF LIABILITY</div>
            IN NO EVENT WILL MICROGATE SYSTEMS, LTD. BE LIABLE TO ANY PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES OF ANY TYPE WHATSOEVER RELATED TO OR ARISING FROM THIS WEB SITE OR ANY USE OF THIS WEB SITE, OR OF ANY SITE OR RESOURCE LINKED TO, REFERENCED, OR ACCESSED THROUGH THIS WEB SITE, OR FOR THE USE OR DOWNLOADING OF, OR ACCESS TO, ANY MATERIALS, INFORMATION, PRODUCTS, OR SERVICES, INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS INTERRUPTION, LOST SAVINGS OR LOSS OF PROGRAMS OR OTHER DATA, EVEN IF MICROGATE SYSTEMS, LTD. IS EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS EXCLUSION AND WAIVER OF LIABILITY APPLIES TO ALL CAUSES OF ACTION, WHETHER BASED ON CONTRACT, WARRANTY, TORT, OR ANY OTHER LEGAL THEORIES.
            <br /><br />
            Additional or different terms, conditions, and notices may apply to specific materials, information, products, software, and services offered through this website. In the event of any conflict, such additional or different terms, conditions, and notices will prevail over these Terms of Use. Please see the applicable agreement or notice.
            <br /><br />
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of Texas, United States of America.
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default termsofuse;
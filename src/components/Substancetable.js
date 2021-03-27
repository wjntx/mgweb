import React from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const Styles = styled.div`
 hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

.main-footer {
     background-color: #f0f0f0;
     max-width: 100%;
 }

bot {
    color: #777;
    &:hover {
        color: #0000EE;
    }
}

h4 {
    color: #72192d;
    font-size: 1.15rem;
    font-weight: 600;
}

h5 {

}

li {
    padding: .5em;
}

ul {
    list-style: none;
    padding-left: 0;
    list-style-position: inside;
    padding-bottom: 0;
}

p {
    white-space: nowrap;
}

.navlink {
    color: black;
    font-weight: 500;
    &:hover {
        color: #0000EE;
    }
}

h2 {
    padding-bottom: 5px;
}
`;

export const Substancetable = () => (
    <React.Fragment>
        <Styles>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Substance</th>
                        <th>Threshold</th>
                        <th>EU RoHS Directive</th>
                    </tr>
                </thead>
                <tbody>
                <tr><td>Cadmium</td>	<td>0.01% (100ppm)</td>	<td>2002/95/EC amended 2011/65/EU</td></tr>
                <tr><td>Lead</td>	<td>0.01% (100ppm)</td>	<td>2002/95/EC amended 2011/65/EU</td></tr>
                <tr><td>Mercury</td>	<td>0.01% (100ppm)</td>	<td>>2002/95/EC amended 2011/65/EU</td></tr>
                <tr><td>Hexavalent chromium</td>	<td>0.01% (100ppm)</td>	<td>2002/95/EC amended 2011/65/EU</td></tr>
                <tr><td>Polybrominated biphenyls (PBB)</td>	<td>0.01% (100ppm)</td>	<td>2002/95/EC amended 2011/65/EU</td></tr>
                <tr><td>Polybrominated diphenyl ethers (PBDE)</td>	<td>0.01% (100ppm)</td>	<td>2002/95/EC amended 2011/65/EU</td></tr>
                <tr><td>Bis(2-ethylhexyl) phthalate (DEHP)</td>	<td>0.01% (100ppm)</td>	<td>EU 2015/863, enforced 22 Jul 2019</td></tr>
                <tr><td>Butyl benzyl phthalate (BBP)</td>	<td>0.01% (100ppm)</td>	<td>EU 2015/863, enforced 22 Jul 2019</td></tr>
                <tr><td>Dibutyl phthalate (DBP)</td>	<td>0.01% (100ppm)</td>	<td>EU 2015/863, enforced 22 Jul 2019</td></tr>
                <tr><td>Diisobutyl phthalate (DIBP)</td>	<td>0.01% (100ppm)</td>	<td>EU 2015/863, enforced 22 Jul 2019</td></tr>
                </tbody>
            </Table>
        </Styles>
    </React.Fragment>
)
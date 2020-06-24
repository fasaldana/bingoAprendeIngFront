import React, { Component } from 'react';

class Application extends Component {

    render() {
        return (
           <div id="content">
                <table id="bingotable">
                    <tr>
                        <td id="square0"> &nbsp;</td>
                        <td id="square1"> &nbsp;</td>
                        <td id="square2"> &nbsp;</td>
                        <td id="square3"> &nbsp;</td>
                        <td id="square4"> &nbsp;</td>
                    </tr>
                    <tr>
                        <td id="square5"> &nbsp;</td>
                        <td id="square6"> &nbsp;</td>
                        <td id="square7"> &nbsp;</td>
                        <td id="square8"> &nbsp;</td>
                        <td id="square9"> &nbsp;</td>
                    </tr>
                    <tr>
                        <td id="square10"> &nbsp;</td>
                        <td id="square11"> &nbsp;</td>
                        <td id="squarefree"> FREE</td>
                        <td id="square12"> &nbsp;</td>
                        <td id="square13"> &nbsp;</td>
                    </tr>
                    <tr>
                        <td id="square14"> &nbsp;</td>
                        <td id="square15"> &nbsp;</td>
                        <td id="square16"> &nbsp;</td>
                        <td id="square17"> &nbsp;</td>
                        <td id="square18"> &nbsp;</td>
                    </tr>
                    <tr>
                        <td id="square19"> &nbsp;</td>
                        <td id="square20"> &nbsp;</td>
                        <td id="square21"> &nbsp;</td>
                        <td id="square22"> &nbsp;</td>
                        <td id="square23"> &nbsp;</td>
                    </tr>
                </table>
               <div id="btn">
                   <input type="submit" value="BINGO" className="btn btn-primary btn-block"></input>
               </div>
           </div>

        )
    }
}

export default Application;
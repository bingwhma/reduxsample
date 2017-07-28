import React, { Component } from 'react';

class CustTable extends Component {
    render() {
        return (

            <div className="content-box-large">
                <div className="panel-heading">
                    <div className="panel-title">Bootstrap dataTables</div>
                </div>
                <div className="panel-body">
                    <table style={{ border: 0, cellpadding: 0, cellspacing: 0 }} className="table table-striped table-bordered" id="example">
                        <thead>
                            <tr>
                                <th>Rendering engine</th>
                                <th>Browser</th>
                                <th>Platform(s)</th>
                                <th>Engine version</th>
                                <th>CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd gradeX">
                                <td>Trident</td>
                                <td>Internet
									 Explorer 4.0</td>
                                <td>Win 95+</td>
                                <td className="center"> 4</td>
                                <td className="center">X</td>
                            </tr>
                            <tr className="even gradeC">
                                <td>Trident</td>
                                <td>Internet
									 Explorer 5.0</td>
                                <td>Win 95+</td>
                                <td className="center">5</td>
                                <td className="center">C</td>
                            </tr>
                            <tr className="odd gradeA">
                                <td>Trident</td>
                                <td>Internet
									 Explorer 5.5</td>
                                <td>Win 95+</td>
                                <td className="center">5.5</td>
                                <td className="center">A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default CustTable;

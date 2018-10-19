import React from 'react';

const ContactsRow = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-offset-3 col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading c-list">
                            <span className="title">Пользователь</span>
                        </div>

                        <ul className="list-group" id="contact-list">
                            <li className="list-group-item">
                                <div className="col-xs-12 col-sm-3">
                                    <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens"
                                         className="img-responsive img-circle"/>
                                </div>
                                <div className="col-xs-12 col-sm-9">
                                    <span className="name">Калегин Ярослав</span>
                                    <br/>
                                    <span className="glyphicon glyphicon-map-marker text-muted c-info"
                                          data-toggle="tooltip" data-placement="bottom"
                                          title="5842 Hillcrest Rd"/>
                                    <span className="visible-xs">
                                        <span className="text-muted">5842 Hillcrest Rd</span>
                                        <br/>
                                    </span>
                                    <span className="glyphicon glyphicon-earphone text-muted c-info"
                                          data-toggle="tooltip" data-placement="bottom" title="(870) 288-4149"/>
                                    <span className="visible-xs">
                                        <span className="text-muted">(870) 288-4149</span>
                                        <br/>
                                    </span>
                                    <span className="fa fa-comments text-muted c-info" data-toggle="tooltip"
                                          data-placement="bottom" title="scott.stevens@example.com"/>
                                    <span className="visible-xs">
                                        <span className="text-muted">scott.stevens@example.com</span>
                                            <br/>
                                    </span>
                                </div>
                                <div className="clearfix"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactsRow;
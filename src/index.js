import _ from 'lodash';
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './style.css';

class IpositaBusinessRequestTable extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        const { 
            openModal,
            createBtn,
            requestTable,
            sideView,
            open,
            close
        } = this.props;
        return (
            <div>
                <div className="pageWrapper">
                    <div className="row reset-row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                            <div className="shadowWrapper">
                                <div className="row reset-row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="shadowBox">
                                            <div className="row pageHeader">
                                                <div className="col-lg-6">
                                                    <span className="createTitle">All Requests</span>
                                                </div>
                                                <div className="col-lg-6 header-buttons">
                                                    <span className="submitButton">
                                                        <button onClick={openModal} type="cancel" className="authBtnTwo">Filter</button>
                                                    </span>
                                                    {createBtn}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                            <div className="row reset-row">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                    <div className="tableDiv">
                                        <div className="shadowBox">
                                            {requestTable}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="shadowBox">
                                        {sideView}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={open} onClose={close} center>
                    <div className="">
                        <div className="signUpHeader">
                            <span className="authTitle">Request Details</span>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
};

export default IpositaBusinessRequestTable;
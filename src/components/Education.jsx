import { motion } from 'framer-motion'
import React, { Component } from 'react';

class Education extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <motion.div className='container' initial="out" animate="in" exit="out" variants={this.props.pageTransition}>
                <div className='card-box'>
                    <div className="section-title">
                        <h2>Education</h2>
                        <div className='title-border'></div>
                        <p></p>
                    </div>
                    <div className="time-line">
                        <div class="main-timeline">
                            <div class="timeline">
                                <div class="icon"></div>
                                <div class="date-content">
                                    <div class="date-outer">
                                        <span class="date">
                                                <span class="month">4 Years</span>
                                        <span class="year">2011</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <h5 class="title">QuangBinh secondary school</h5>
                                    <p class="description">
                                        Quang Binh secondary school is located in Quang Binh-Quang Xuong-Thanh Hoa
                                    </p>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="icon"></div>
                                <div class="date-content">
                                    <div class="date-outer">
                                        <span class="date">
                                                <span class="month">3 Years</span>
                                        <span class="year">2015</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <h5 class="title">Dang Thai Mai high school</h5>
                                    <p class="description">
                                        Dang Thai Mai high school is located in Quang Binh-Quang Xuong-Thanh Hoa
                                    </p>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="icon"></div>
                                <div class="date-content">
                                    <div class="date-outer">
                                        <span class="date">
                                                <span class="month">4 Years</span>
                                        <span class="year">2018</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <h5 class="title">HaNoi university of industry</h5>
                                    <p class="description">
                                        Hanoi University includes 3 campuses:
                                        <br />
                                        Headquarter: No. 298 Cau Dien Street, Bac Tu Liem District, Hanoi<br />
                                        Campus 2: Tay Tuu Ward, Bac Tu Liem, Hanoi<br />
                                        Campus 3: Le Hong Phong, City. Phu Ly, Ha Nam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
}

export default Education;
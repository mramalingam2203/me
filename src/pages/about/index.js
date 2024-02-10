import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

import octaveIcon from './icons/octave.png';
import awsIcon from './icons/aws.png';
import mongoIcon from './icons/mongodb.png';
import flutterIcon from './icons/flutter.webp';
import tfIcon from './icons/tensor-flow.png';
import goIcon from './icons/go.png';
import djIcon from './icons/django.svg';
import laravelIcon from './icons/laravel.png';
import reactIcon from './icons/react.jpeg';
import mysqlIcon from './icons/mysql.png';
import mariadbIcon from './icons/mariadb.png';
import nvidiaIcon from './icons/nvidia.png';
import rIcon from './icons/rstudio.png'
import pyIcon from './icons/python.png'
import cppIcon from './icons/cpp.jpeg'
import swiftIcon from './icons/swift.jpeg'
import ofIcon from './icons/of.png' ;
import phpIcon from './icons/php.jpeg'
import nodeIcon from './icons/node.png'
import tsIcon from './icons/ts.png'




export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>

            <div className="icon-table-container" style={{ justifyContent: 'center', alignItems: 'center', height: '10vh' , padding: '0px'}}>
     <table className="icon-table">
  <tbody>
    <tr>
      <td style={{ padding: '15px' }}><img src={octaveIcon} width="50" height="50" alt="GNU-Octave"/></td>
      <td style={{ padding: '15px' }}><img src={ofIcon} width="50" height="50" alt="OpenFOAM" /></td>
      <td style={{ padding: '15px' }}><img src={pyIcon} width="50" height="50" alt="Python" /></td>
      <td style={{ padding: '15px' }}><img src={cppIcon} width="50" height="50" alt="C++" /></td>
      <td style={{ padding: '15px' }}><img src={nvidiaIcon} width="50" height="50" alt="CUDA" /></td>


    </tr>
    <tr>
      <td style={{ padding: '15px' }}><img src={goIcon} width="50" height="50" alt="Golang"/></td>
      <td style={{ padding: '15px' }}><img src={awsIcon} width="50" height="50" alt="AWS"/></td>
      <td style={{ padding: '15px' }}><img src={mariadbIcon} width="50" height="50" alt="MariaDB"/></td>
      <td style={{ padding: '15px' }}><img src={mysqlIcon} width="50" height="50" alt="MySQL"/></td>
      <td style={{ padding: '15px' }}><img src={mongoIcon} width="50" height="50" alt="MongoDB"/></td>


    </tr>
     <tr>
      <td style={{ padding: '15px' }}><img src={tfIcon} width="50" height="50" alt="TensorFlow"/></td>
      <td style={{ padding: '15px' }}><img src={flutterIcon} width="50" height="50" alt="Flutter"/></td>
      <td style={{ padding: '15px' }}><img src={rIcon} width="50" height="50" alt="R"/></td>
      <td style={{ padding: '15px' }}><img src={swiftIcon} width="50" height="50" alt="Swift"/></td>
      <td style={{ padding: '15px' }}><img src={reactIcon} width="50" height="50" alt="React"/></td>

    </tr>
      <tr>
      <td style={{ padding: '15px' }}><img src={djIcon} width="50" height="50" alt="Django"/></td>
      <td style={{ padding: '15px' }}><img src={laravelIcon} width="50" height="50" alt="Laravel"/></td>
      <td style={{ padding: '15px' }}><img src={phpIcon} width="50" height="50" alt="PHP"/></td>
      <td style={{ padding: '15px' }}><img src={nodeIcon} width="50" height="50" alt="NodeJS"/></td>
      <td style={{ padding: '15px' }}><img src={tsIcon} width="50" height="50" alt="TypeScript"/></td>
    </tr>


  </tbody>
</table>
    </div>

          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
      
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
     
      </Container>
    </HelmetProvider>
  );
};

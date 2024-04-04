/* eslint-disable prettier/prettier */
import { CContainer, CRow } from '@coreui/react'
import React from 'react'
import { ResImage } from '../../../../components'
const Services = () => {
  return (
    <div id="services" className="text-center section">
      <CContainer
        className="justify-content-center"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <CRow className="section-title">
          <h2>Our Services</h2>
        </CRow>
        <CRow>
          <div className="col-xs-6 col-sm-3">
            {' '}
            <div className="square-img-container">
              <ResImage
                avifSrc={require('#assets/images/communicate.png?{format: "avif", sizes:[310, 520]}')}
                jpgSrc={require('#assets/images/communicate.png?{format: "jpg", sizes:[310, 520]}')}
                alt="..."
                className="img img-fluid"
                sizes="(max-width: 575px) 520px, 300px"
              />
            </div>
            <h3>通訊錄</h3>
            <p>
              建立完整系友聯繫網路
              <br />
              加深NTUEErs之間的連結
            </p>
          </div>
          <div className="col-xs-6 col-sm-3">
            {' '}
            <div className="square-img-container">
              <ResImage
                avifSrc={require('#assets/images/career.png?{format: "avif", sizes:[310, 520]}')}
                jpgSrc={require('#assets/images/career.png?{format: "jpg", sizes:[310, 520]}')}
                alt="..."
                className="img img-fluid"
                sizes="(max-width: 575px) 520px, 300px"
              />
            </div>
            <h3>徵才求職</h3>
            <p>
              透過已建立之聯繫網絡分享工作資訊
              <br />
              不怕錯失內推機會
            </p>
          </div>
          <div className="col-xs-6 col-sm-3">
            {' '}
            <div className="square-img-container">
              <ResImage
                avifSrc={require('#assets/images/studyabroad.png?{format: "avif", sizes:[310, 520]}')}
                jpgSrc={require('#assets/images/studyabroad.png?{format: "jpg", sizes:[310, 520]}')}
                alt="..."
                className="img img-fluid"
                sizes="(max-width: 575px) 520px, 300px"
              />
            </div>
            <h3>留學資訊</h3>
            <p>
              整理國外各校和本系歷年的留學資料
              <br />
              提供在校學生參考
            </p>
          </div>
          <div className="col-xs-6 col-sm-3">
            {' '}
            <div className="square-img-container">
              <ResImage
                avifSrc={require('#assets/images/column.png?{format: "avif", sizes:[310, 520]}')}
                jpgSrc={require('#assets/images/column.png?{format: "jpg", sizes:[310, 520]}')}
                alt="..."
                className="img img-fluid"
                sizes="(max-width: 575px) 520px, 300px"
              />
            </div>
            <h3>採訪文章</h3>
            <p>
              收錄過去採訪眾多系友的紀錄
              <br />
              分享獨一無二的經歷和體驗
            </p>
          </div>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Services

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import one from '../../images/1.png';
import two from '../../images/2.png';
import three from '../../images/3.png';
import four from '../../images/4.png';
import five from '../../images/5.png';
import six from '../../images/6.png';
import seven from '../../images/7.png';
import eight from '../../images/8.png';
import nine from '../../images/9.png';
import ten from '../../images/10.png';
import eleven from '../../images/11.png';
import twelve from '../../images/12.png';

const DownloadButton = ({ imageSrc }) => {
    const handleDownload = () => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = function () {
            const blob = xhr.response;
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'goldstar.png'; // Set the desired filename
            a.style.display = 'none';

            document.body.appendChild(a);
            a.click();

            // Clean up by removing the anchor element and revoking the object URL
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };

        xhr.open('GET', imageSrc);
        xhr.send();
    };

    return (
        <div className="centered-content has-text-centered">
            <img src={imageSrc} alt="goldstar" />
            <span onClick={handleDownload}>
                <div className="is-pulled-left is-clickable"><FontAwesomeIcon icon={faDownload} size="sm" className="is-size-3 mr-4" /></div>
            </span>
        </div>
    );
};

const Pictures = () => {
    return (
        <div className="section container is-max-widescreen">
            <h1 className="title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered">
                Here are some free downloadable gold stars!
            </h1>
            <div className="">
                <div className="columns">
                    <div className="column">
                        <DownloadButton imageSrc={one} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={two} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={three} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <DownloadButton imageSrc={four} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={five} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={six} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <DownloadButton imageSrc={seven} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={eight} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={nine} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <DownloadButton imageSrc={ten} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={eleven} />
                    </div>
                    <div className="column">
                        <DownloadButton imageSrc={twelve} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pictures;

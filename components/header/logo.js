import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const A = styled.a`${tachyons}`;

const Logo = ({children}) => (
	<Link href="/" as="/" passHref prefetch>
		<A near_white hover_white no_underline dib>
			<svg style={{width: '100%'}} viewBox="0 0 399 76">
				<title>{children}</title>
				<g>
				    <g id="Dotwatcher---04" fill="#111">
				        <g id="Group">
				            <path d="M16.0865306,10.3102041 L25.7763265,27.1444898 L30.922449,18.2040816 L40.2481633,34.4065306 C42.1126531,29.1787755 43.36,24.6155102 43.36,21.7469388 C43.36,9.75836735 33.6293878,0 21.6816327,0 C9.72897959,0 0,9.75836735 0,21.7469388 C0,24.4326531 1.10857143,28.6204082 2.77877551,33.4285714 L16.0865306,10.3102041 Z" id="Fill-1"></path>
				            <path d="M18.3265306,22.8571429 L15.0955102,28.4734694 L11.8628571,22.8571429 L3.26530612,37.7910204 C8.98122449,52.7477551 18.4914286,71.28 19.0481633,72.3755102 L20.6873469,75.5183673 L22.2922449,72.3755102 C22.7314286,71.5477551 28.2710204,60.7608163 33.4220408,49.0906122 L18.3265306,22.8571429 Z" id="Fill-3"></path>
				            <path d="M29.36,24.4897959 L26.122449,30.117551 L34.4930612,44.6579592 C35.4367347,42.442449 36.3461224,40.2318367 37.1820408,38.0816327 L29.36,24.4897959 Z" id="Fill-5"></path>
				        </g>
				        <g id="Group-2" transform="translate(66.938776, 14.693878)">
				            <path d="M323.748408,19.0395102 C322.654531,18.0680816 321.225959,17.586449 319.462694,17.586449 L311.625959,17.586449 L311.625959,28.5578776 L319.462694,28.5578776 C321.225959,28.5578776 322.654531,28.0844082 323.748408,27.1293061 C324.842286,26.1823673 325.389224,24.8354286 325.389224,23.0966531 C325.389224,21.3578776 324.842286,20.0027755 323.748408,19.0395102 L323.748408,19.0395102 Z M325.585143,47.708898 L318.238204,33.0150204 L311.625959,33.0150204 L311.625959,47.708898 L306.336163,47.708898 L306.336163,12.8354286 L319.852898,12.8354286 C321.519837,12.8354286 323.013714,13.0884898 324.336163,13.5946122 C325.658612,14.1007347 326.793306,14.8027755 327.740245,15.7007347 C328.685551,16.5986939 329.413714,17.6762449 329.918204,18.9333878 C330.425959,20.1905306 330.67902,21.5537959 330.67902,23.0231837 C330.67902,25.5374694 330.009633,27.5701224 328.670857,29.1211429 C327.330449,30.6721633 325.683102,31.7252245 323.722286,32.2803265 L331.754939,47.708898 L325.585143,47.708898 Z M276.801469,47.708898 L276.801469,12.8354286 L299.087184,12.8354286 L299.087184,17.586449 L282.089633,17.586449 L282.089633,27.7742041 L296.589224,27.7742041 L296.589224,32.4762449 L282.089633,32.4762449 L282.089633,42.9578776 L299.087184,42.9578776 L299.087184,47.708898 L276.801469,47.708898 Z M262.401469,47.708898 L262.401469,32.4762449 L248.246367,32.4762449 L248.246367,47.708898 L242.956571,47.708898 L242.956571,12.8354286 L248.246367,12.8354286 L248.246367,27.7252245 L262.401469,27.7252245 L262.401469,12.8354286 L267.689633,12.8354286 L267.689633,47.708898 L262.401469,47.708898 Z M234.360653,41.8803265 C233.625959,43.219102 232.711673,44.3456327 231.617796,45.2599184 C230.522286,46.1742041 229.283102,46.8599184 227.893714,47.3170612 C226.505959,47.7742041 225.030041,48.0027755 223.461061,48.0027755 C221.634122,48.0027755 219.95249,47.6844082 218.417796,47.0476735 C216.883102,46.4109388 215.511673,45.4884898 214.30351,44.2803265 C213.454531,43.4313469 212.801469,42.5333878 212.344327,41.586449 C211.885551,40.6395102 211.550857,39.6109388 211.338612,38.5007347 C211.128,37.3905306 211.003918,36.1578776 210.972898,34.8027755 C210.940245,33.4476735 210.923918,31.9374694 210.923918,30.2721633 C210.923918,28.6068571 210.940245,27.0966531 210.972898,25.741551 C211.003918,24.386449 211.128,23.1537959 211.338612,22.0435918 C211.550857,20.9333878 211.885551,19.9048163 212.344327,18.9578776 C212.801469,18.0109388 213.454531,17.1129796 214.30351,16.264 C215.511673,15.0558367 216.883102,14.1333878 218.417796,13.4966531 C219.95249,12.8599184 221.634122,12.541551 223.461061,12.541551 C226.695347,12.541551 229.421878,13.4558367 231.642286,15.2844082 C233.862694,17.1129796 235.281469,19.7742041 235.90351,23.2680816 L230.515755,23.2680816 C230.091265,21.5048163 229.297796,20.0680816 228.138612,18.9578776 C226.979429,17.8476735 225.420245,17.2925714 223.461061,17.2925714 C222.419429,17.2925714 221.454531,17.4803265 220.572898,17.8558367 C219.691265,18.2313469 218.940245,18.7456327 218.319837,19.3986939 C217.895347,19.8558367 217.544327,20.3537959 217.265143,20.8925714 C216.987592,21.4313469 216.775347,22.1007347 216.630041,22.9007347 C216.483102,23.7007347 216.37698,24.6884898 216.311673,25.864 C216.244735,27.0395102 216.213714,28.508898 216.213714,30.2721633 C216.213714,32.0354286 216.244735,33.5048163 216.311673,34.6803265 C216.37698,35.8558367 216.483102,36.8435918 216.630041,37.6435918 C216.775347,38.4435918 216.987592,39.1129796 217.265143,39.6517551 C217.544327,40.1905306 217.895347,40.6884898 218.319837,41.1456327 C218.940245,41.7986939 219.691265,42.3129796 220.572898,42.6884898 C221.454531,43.064 222.419429,43.2517551 223.461061,43.2517551 C225.420245,43.2517551 226.987592,42.6966531 228.164735,41.586449 C229.340245,40.4762449 230.140245,39.0395102 230.564735,37.2762449 L235.90351,37.2762449 C235.609633,39.0068571 235.095347,40.541551 234.360653,41.8803265 L234.360653,41.8803265 Z M197.007184,17.586449 L197.007184,47.708898 L191.717388,47.708898 L191.717388,17.586449 L182.117388,17.586449 L182.117388,12.8354286 L206.607184,12.8354286 L206.607184,17.586449 L197.007184,17.586449 Z M166.440653,20.7701224 L161.003918,36.2476735 L171.732082,36.2476735 L166.440653,20.7701224 Z M175.601469,47.708898 L173.201469,40.7048163 L159.436571,40.7048163 L157.038204,47.708898 L151.403918,47.708898 L164.189224,12.8354286 L168.450449,12.8354286 L181.234122,47.708898 L175.601469,47.708898 Z M141.359837,47.708898 L135.221061,47.708898 L125.753306,15.1211429 L116.349224,47.708898 L110.208816,47.708898 L98.0635102,1.21093878 L105.506776,1.21093878 L113.604735,34.4517551 L122.945143,1.21093878 L128.625143,1.21093878 L137.963918,34.4517551 L146.06351,1.21093878 L153.508408,1.21093878 L141.359837,47.708898 Z M85.5688163,17.586449 L85.5688163,47.708898 L80.2790204,47.708898 L80.2790204,17.586449 L70.6790204,17.586449 L70.6790204,12.8354286 L95.1688163,12.8354286 L95.1688163,17.586449 L85.5688163,17.586449 Z M61.5443265,25.8884898 C61.4953469,24.7293061 61.3973878,23.7497143 61.250449,22.9497143 C61.1035102,22.1497143 60.8912653,21.4803265 60.6137143,20.941551 C60.3345306,20.4027755 59.9835102,19.9048163 59.5606531,19.4476735 C58.9402449,18.7946122 58.1810612,18.2721633 57.283102,17.8803265 C56.3851429,17.4884898 55.4137143,17.2925714 54.3688163,17.2925714 C53.3239184,17.2925714 52.3524898,17.4884898 51.4545306,17.8803265 C50.5565714,18.2721633 49.7973878,18.7946122 49.1769796,19.4476735 C48.7508571,19.9048163 48.4014694,20.4027755 48.1239184,20.941551 C47.8463673,21.4803265 47.6341224,22.1497143 47.4871837,22.9497143 C47.3402449,23.7497143 47.2422857,24.7293061 47.1916735,25.8884898 C47.1443265,27.0476735 47.1198367,28.508898 47.1198367,30.2721633 C47.1198367,32.0354286 47.1443265,33.4966531 47.1916735,34.6558367 C47.2422857,35.8150204 47.3402449,36.7946122 47.4871837,37.5946122 C47.6341224,38.3946122 47.8463673,39.064 48.1239184,39.6027755 C48.4014694,40.141551 48.7508571,40.6395102 49.1769796,41.0966531 C49.7973878,41.7497143 50.5565714,42.2721633 51.4545306,42.664 C52.3524898,43.0558367 53.3239184,43.2517551 54.3688163,43.2517551 C55.4137143,43.2517551 56.3851429,43.0558367 57.283102,42.664 C58.1810612,42.2721633 58.9402449,41.7497143 59.5606531,41.0966531 C59.9835102,40.6395102 60.3345306,40.141551 60.6137143,39.6027755 C60.8912653,39.064 61.1035102,38.3946122 61.250449,37.5946122 C61.3973878,36.7946122 61.4953469,35.8150204 61.5443265,34.6558367 C61.5933061,33.4966531 61.6177959,32.0354286 61.6177959,30.2721633 C61.6177959,28.508898 61.5933061,27.0476735 61.5443265,25.8884898 L61.5443265,25.8884898 Z M66.8586122,34.8027755 C66.8259592,36.1578776 66.7100408,37.3905306 66.5157551,38.5007347 C66.3182041,39.6109388 65.9933061,40.6395102 65.5361633,41.586449 C65.0773878,42.5333878 64.4259592,43.4313469 63.5769796,44.2803265 C62.3671837,45.4884898 60.9957551,46.4109388 59.4626939,47.0476735 C57.928,47.6844082 56.2300408,48.0027755 54.3688163,48.0027755 C52.5059592,48.0027755 50.8177959,47.6844082 49.2994286,47.0476735 C47.7810612,46.4109388 46.4177959,45.4884898 45.2096327,44.2803265 C44.3606531,43.4313469 43.7075918,42.5333878 43.250449,41.586449 C42.7933061,40.6395102 42.4586122,39.6109388 42.2463673,38.5007347 C42.0341224,37.3905306 41.9116735,36.1578776 41.8773878,34.8027755 C41.8463673,33.4476735 41.8284082,31.9374694 41.8284082,30.2721633 C41.8284082,28.6068571 41.8463673,27.0966531 41.8773878,25.741551 C41.9116735,24.386449 42.0341224,23.1537959 42.2463673,22.0435918 C42.4586122,20.9333878 42.7933061,19.9048163 43.250449,18.9578776 C43.7075918,18.0109388 44.3606531,17.1129796 45.2096327,16.264 C46.4177959,15.0558367 47.7810612,14.1333878 49.2994286,13.4966531 C50.8177959,12.8599184 52.5059592,12.541551 54.3688163,12.541551 C56.2300408,12.541551 57.928,12.8599184 59.4626939,13.4966531 C60.9957551,14.1333878 62.3671837,15.0558367 63.5769796,16.264 C64.4259592,17.1129796 65.0773878,18.0109388 65.5361633,18.9578776 C65.9933061,19.9048163 66.3182041,20.9333878 66.5157551,22.0435918 C66.7100408,23.1537959 66.8259592,24.386449 66.8586122,25.741551 C66.8912653,27.0966531 66.9075918,28.6068571 66.9075918,30.2721633 C66.9075918,31.9374694 66.8912653,33.4476735 66.8586122,34.8027755 L66.8586122,34.8027755 Z M26.7933061,16.0027755 C26.5712653,13.8068571 25.852898,12.0272653 24.6382041,10.6803265 C22.7198367,8.59053061 20.0912653,7.54563265 16.7361633,7.54563265 L8.18106122,7.54563265 L8.18106122,41.3742041 L16.7361633,41.3742041 C20.0912653,41.3742041 22.7198367,40.3293061 24.6382041,38.2395102 C25.852898,36.8925714 26.5712653,35.0068571 26.7933061,32.5905306 C27.0137143,30.1742041 27.1182041,27.3578776 27.1182041,24.1333878 C27.1182041,20.908898 27.0137143,18.1986939 26.7933061,16.0027755 L26.7933061,16.0027755 Z M34.1386122,29.2925714 C34.1157551,31.0313469 33.9769796,32.7293061 33.7141224,34.386449 C33.452898,36.0435918 32.9957551,37.6272653 32.3443265,39.1537959 C31.6912653,40.6803265 30.7345306,42.0680816 29.4708571,43.3333878 C27.9933061,44.8109388 26.2300408,45.9129796 24.1810612,46.6313469 C22.1320816,47.3497143 19.8953469,47.708898 17.4545306,47.708898 L1.128,47.708898 L1.128,1.21093878 L17.4545306,1.21093878 C19.8953469,1.21093878 22.1320816,1.57012245 24.1810612,2.2884898 C26.2300408,3.00685714 27.9933061,4.10889796 29.4708571,5.58644898 C30.7345306,6.8517551 31.6912653,8.20685714 32.3443265,9.66808163 C32.9957551,11.1293061 33.452898,12.6476735 33.7141224,14.2395102 C33.9769796,15.8313469 34.1157551,17.4476735 34.1386122,19.1048163 C34.1647347,20.7619592 34.172898,22.4354286 34.172898,24.1333878 C34.172898,25.8313469 34.1647347,27.5537959 34.1386122,29.2925714 L34.1386122,29.2925714 Z" id="Fill-7"></path>
				        </g>
				    </g>
				</g>
				</svg>
		</A>
	</Link>
);

Logo.propTypes = {
	children: PropTypes.string.isRequired
};

export default Logo;

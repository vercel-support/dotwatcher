import React, {Component} from 'react';
import polyline from '@mapbox/polyline';
import Placeholder from '../placeholder';

class MapWrap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inBrowser: false
		};
	}

	componentDidMount() {
		this.setState({inBrowser: true});
	}

	render() {
		let embed = null;
		if (this.state.inBrowser) {
			const reactMapboxGl = require('react-mapbox-gl');
			const Layer = reactMapboxGl.Layer;
			const Feature = reactMapboxGl.Feature;
			const routeLine = polyline.decode('w~lnG_rwd@x@s@JUDUBoAHg@AIGMI@KJGPEVA~@CRCHGHMF}@Xk@Jg@C[Bs@XSBoAIY@MD]Zq@VoADSRKj@AT@b@Fj@XpAAPE@EAIMIk@a@sAO}AAi@Fe@@[Qq@E_@Eu@FsAPmABg@EqCGYGEMBEP@TFj@Al@MZc@p@KVIb@GnAQv@QNm@ZC?DIf@UJ]AkAMu@Ka@Ca@@WBW^aAAUEEIAGDKLo@pAGf@ArAG`@QLq@VgALKJ@dAJpA?VGJE@a@C[W]s@GuAQe@_@g@EOAODONOj@a@R_@Va@PCb@JVQJc@?YIa@c@kAQSMKOEWC_@LSLw@hA_@`@_@TcA\\KJU\\GDOOE_@@Qj@eCRm@TcADm@GSOGE@qAfA]\\U^s@v@_@t@GDMK?OF]LULm@Do@@{@C]GICAIFAFCn@Md@g@`AODEEAEBQPSJa@?QA[FcAAQGMa@]wAo@y@c@e@c@Wi@IKC?MBIRKx@YlA{BpHc@v@oBhCgCdC[RWBWCYGo@g@q@SWCg@LIFyAjBi@~@a@t@u@nB[f@QPu@`@eAz@kBbAQTc@z@EL?`@Nv@?FEJKAk@}A]mBUk@W_@aAo@CQ@_@NaAf@qADWJuAZu@`@i@dAgANS^y@X}@f@iAJQt@s@FIV}@RaBNk@RUl@SZW^a@Vc@^sAj@eCHi@Bo@B{BEu@K[sAqCeAeBIQScAOSSOi@Q[S_AeA[c@g@iAS[g@g@g@OOKu@qAs@y@OEE@GJ?FHlAP|AF\\Tj@t@~@@LKLOE_@]g@Qa@Y_CwBa@k@a@w@k@iAg@wAeAqBUg@w@sBQq@My@Ss@s@eA}@}@[m@q@c@sAaA}@}@Ik@Gs@Me@]{@QcA?e@IWG@EJMbAIPWTGx@ERIRMHIBQ?}@IY@OLEPBlBLvBKhB@bAF\\ALOHUAQBg@Rc@X[b@Sf@EVAx@BpAKj@u@hBy@~A_@ZSH_@LUBa@Gk@CQ]BYHC`@_@X_@Vc@BOCQCEEAQ?s@Zu@Bs@Ec@M_@EcBEcABYAi@KmAe@s@i@a@}@Iq@GYc@s@a@a@KCmAFe@Ei@WQG_@c@Ue@Me@OUAMBKJ?T^b@V`@Jn@AHCROt@w@l@qA^kAB[TkALaAVoAHUPw@b@cCLmALy@FeB@s@CQ?u@YgCEgDOmCEQKY{@sAa@aAOs@CeBIe@Cm@Y{@Ow@y@yA]kAUk@CWAs@@wBB[ByAFq@DOFOXWPGVDb@JzAp@jA^PHNNPJXDRCTIHINe@RWLe@d@u@NATDx@\\RLbAVRAj@B`@ANQ`@w@X[|AkAp@[FG`@aARiAXaABU');
			routeLine.map(coordinates => coordinates.reverse());

			const Map = reactMapboxGl.Map({
				accessToken: 'pk.eyJ1IjoiY2hyeXNhbGlzc29sbW90aXZlIiwiYSI6ImNqZnVydXhzMTEwYTIycXFrODJ6d2ZmMHEifQ.FTTOqIPCImFdOnYhx3Jx3Q'
			});
			// embed = (
			// 	<Map style="mapbox://styles/chrysalissolmotive/cjfrxfulb0jnn2rohx4ur6ba4" containerStyle={{height: '100vh', width: '100%'}} center={[6.188003132119775, 44.4722865242511]} zoom={[12]}>
			// 		<Layer
			// 			type="line"
			// 			id="line"
			// 			layout={{'line-cap': 'round', 'line-join': 'round'}}
			// 			paint={{
			// 				'line-color': '#ff4136',
			// 				'line-opacity': 0.8,
			// 				'line-width': 2
			// 			}}
			// 		>
			// 			<Feature coordinates={routeLine}/>
			// 		</Layer>
			// 	</Map>);
			embed = <iframe style={{height: '100vh', width: '100%'}} frameborder="0" scrolling="no" src="http://trackleaders.com/aztr18f.php" allowfullscreen></iframe>
		} else {
			embed = <Placeholder w_100 vh_100 bg_light_gray/>;
		}

		return embed;
	}
}

export default MapWrap;

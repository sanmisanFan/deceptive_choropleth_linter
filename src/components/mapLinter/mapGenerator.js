import React, {Component} from "react";
import '../../styles/MapLinter.css';
//import {Card} from 'antd';
import embed from 'vega-embed';

class MapGenerator extends Component {
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }

    drawVegaMap = (selectedCaseData, spec, selectRawCase) => {

        if(selectRawCase === 'county_unemployment'){

            spec.data.values = selectedCaseData.geo;
            //spec.transform[0].from.data.values = selectedCaseData.data.data;
            //console.log(spec);
            const result = embed(this.canvasRef.current, spec)
            .then((re)=>{
                // result should be stored into the state
                console.log(re);
            })
            .catch((err)=>{
                //console.log(err);
            });

        }else if(selectRawCase === 'state_education'){
            /** Preprocess the vega spec */
            spec.data.values = selectedCaseData.geo;
            //spec.projection.fit = selectedCaseData.geo.features;
            const result = embed(this.canvasRef.current, spec)
            .then((re)=>{
                // result should be stored into the state
                //console.log('Original Choropleth Map');
                
            })
            .catch((err)=>{
                this.props.onVegaParseError(err, true);
                //console.log(err);
            });

        }else if(selectRawCase === 'montreal_pop_density'){
            /** Preprocess the vega spec */
            spec.data.values = selectedCaseData.geo;
            //spec.projection.fit = selectedCaseData.geo.features;
            const result = embed(this.canvasRef.current, spec)
            .then((re)=>{
                // result should be stored into the state
                //console.log('Original Choropleth Map');
                
            })
            .catch((err)=>{
                //this.props.onVegaParseError(err, true);
                //console.log(err);
            });
            
        }else if(selectRawCase === 'georgia_pctBach'){

            /** Preprocess the vega spec */
            spec.data.values = selectedCaseData.geo;

            //spec.projection.fit = selectedCaseData.geo.features;
            const result = embed(this.canvasRef.current, spec)
            .then((re)=>{
                // result should be stored into the state
                //console.log('Original Choropleth Map');
                
            })
            .catch((err)=>{
                //this.props.onVegaParseError(err, true);
                //console.log(err);
            });

        }
        
    };


    /** class function section */
    componentDidMount(){
        if(this.props.selectRawCase !== null){
            this.drawVegaMap(this.props.selectedCaseData, this.props.vegaLiteSpec, this.props.selectRawCase);
        }
        
    }

    componentWillReceiveProps(nextProps, nextContext){
        if(nextProps.selectRawCase !== null){
            this.drawVegaMap(nextProps.selectedCaseData, nextProps.vegaLiteSpec, nextProps.selectRawCase);
        }
        
    }

    /** render components */
    render(){

        return(
            <div ref={this.canvasRef}></div>
        );
    }
}
export default MapGenerator;
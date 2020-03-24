import React from 'react';
import InputSalary from './inputSalary';
import "antd/dist/antd.css";
import LoadingImg from './loadingImg';
import {Anchor} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor'


function CalculatorPage() {
    const styleDiv = {
        //backgroundColor:'whiteSmoke',
        width:'90%',
        display:'flex',
        justifyContent:'center',
        marginTop: '5%',
        marginLeft:'5%',
        marginRight:'5%',
        padding:'2%',
        height:'500px',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return(
        <ScrollableAnchor id="calculadora">
            <section style={styleDiv}>
                <Anchor affix={false}>
                    <a href="#calculadora" className="anchor">#</a>
                </Anchor>
                <h3>Não divulgaremos para ninguém!!!</h3>
                <InputSalary 
                    placeholder={"Salário R$"} 
                    title={"Digite seu salário"}
                    nameButtom={"Calcular Orçamento"}
                />
                <LoadingImg/>
            </section>
        </ScrollableAnchor> 
    )
}

export default CalculatorPage ;
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import $ from 'jquery';
import { slide as Menu } from 'react-burger-menu'


class MenuBar extends React.Component {
  showSettings (event) {
    $('.mobile_menu').click(function(){
      $('.sidebar').addClass('recolheMenu'); 
    })

    $('.mobile_menuContainer').click(function(){
      $('.sidebar').show(1000);
      $('.sidebar').removeClass('recolheMenu')
    })

    $('.repository').click(function(){
      $('.sidebar').addClass('recolheMenu'); 
    })
  }

  render () {    
    return (      
      <div className="mobile_menu" onClick={ this.showSettings }><i className="fas fa-align-justify"></i></div>      
    );
  }
}


export default MenuBar;

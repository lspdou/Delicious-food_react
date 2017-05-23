import React from "react"
import {Router,Route,IndexLink,IndexRoute} from "react-router";
var List=React.createClass({
	getDefaultProps:function(){
		return{
			url:'js/list.json'
		}
	},
	getInitialState:function(){
		return{
			res:'',
			res1:'',
			res2:''
		}
	},
	
	componentWillMount:function(){
		var _this=this
		$.ajax({
			url:_this.props.url,
			type:"get",
			dataType:"json",
			success:function(data){
				var arr=[]
				var arr1=[]
				var arr2=[]
				var chuan="/detail/"
				for (var i in data){
					arr.push(data[i].title)
					arr1.push(data[i].imgsrc)
					chuan=chuan+i
					arr2.push(chuan)
					_this.setState({res:arr,res1:arr1,res2:arr2})
					chuan="/detail/"
				}
			}	
		});
	},
	render:function(){
		var str=[]
		for(var i=0;i<this.state.res.length;i++){
			str.push(<div className="LisZ_div"><IndexLink to={this.state.res2[i]} ><img  src={this.state.res1[i]}/></IndexLink><h4>{this.state.res[i]}</h4></div>)
		}
		return(
			<div>
				{str}
			</div>
		)
	}
})


module.exports = List;


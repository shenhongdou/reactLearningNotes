import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.css');

// let w1 = "hello";
// let w2 = "world";

/*
	知识点：
	1. className 类名
	2. data-属性名 自定义属性
	3. { 变量名 }
	4. style={ {color:"red"} }
	5.


*/

// let span = <span className="welcome">world</span>;

// ReactDOM.render(

// 	<div> {w1} <span style={ { color:"#fff",fontSize:"200px" } } className="welcome" data-abc="abc">{w2}</span> </div>,
// 	// <div> {w1} { span } </div>,
// 	document.getElementById("root")

// )


ReactDOM.render(

<div>
	<h2>Comments</h2>
	<ul>
		<li>
			<div className="lists">
				<img src={ require('./common/img/1.jpg') }/>
				<div className="content">
					<h3>Matt</h3>
					<p>How artistic!</p>
					<span>回复</span>
				</div>
			</div>
		</li>
		<li>
			<div  className="lists">
				<img src={ require('./common/img/2.jpeg') } />
				<div className="content">
					<h3>Elliot Fu</h3>
					<p>This is been ver useful for research. Thanks as well!</p>
					<span>回复</span>
				</div>
			</div>
			<ul>
				<li>
					<div  className="lists">
						<img src={ require('./common/img/3.jpg') } />
						<div className="content">
							<h3>Jenny Hess</h3>
							<p>Elliot you are always so right :)</p>
							<span>回复</span>
						</div>
					</div>
				</li>
			</ul>
		</li>
		<li>
			<div  className="lists">
				<img src={ require('./common/img/4.jpg') } />
				<div className="content">
					<h3>Joe Henderson</h3>
					<p>Dude,this is awesome.Thanks so much</p>
					<span>回复</span>
				</div>
			</div>
		</li>
	</ul>
	<textarea></textarea>
	<button>回复</button>

</div>,
document.getElementById("root")
)



let data = [
	{
		date:"今天",
		num:[
				{
					imgSrc:require('./common/img/1.jpg'),
					name:"Matt",
					time:"11:20",
					content:"你好",
					reply:[]
				},
				{
					imgSrc:require('./common/img/2.jpeg'),
					name:"Jenny",
					time:"11:20",
					content:"你好",
					reply:[
						{
							imgSrc:require('./common/img/3.jpg'),
							name:"Sal",
							time:"11:20",
							content:"你好",
							reply:[]
						}
					]
				},
				{
					imgSrc:require('./common/img/3.jpg'),
					name:"Molly",
					time:"11:20",
					content:"你好",
					reply:[]
				}
			]
		},
		{
			date:"昨天",
			num:[
					{
						imgSrc:require('./common/img/3.jpg'),
						name:"Sal",
						time:"11:20",
						content:"你好",
						reply:[]
					},
					{
						imgSrc:require('./common/img/5.jpg'),
						name:"Mike",
						time:"11:20",
						content:"你好",
						reply:[]
					}
				]
		},
		{
			date:"前天",
			num:[
					{
						imgSrc:require('./common/img/3.jpg'),
						name:"Sal",
						time:"11:20",
						content:"你好",
						reply:[]
					}
				]
		}
	]

class CommentDate extends React.Component{
	render(){
		return <h3>{this.props.date}</h3>
	}
}


class Comment extends React.Component{
	
	render(){
		let {imgSrc,name,time,content} = this.props;
		return (
			
			<div className="lists">
				<img src={ imgSrc } />
				<div className="content">
					<h4>{ name } <em>{ time }</em></h4>
					<p>{ content }</p>
					<span>回复</span>
				</div>
			</div>
				
		)
	}
}

class CommentUl extends React.Component{

	render(){

		let {data} = this.props;
		
		let commentlist = data.map((item,index)=>{
			
			return item.reply.length>0 ? <li key = {index} ><Comment {...item} /><CommentUl data = {item.reply} /></li> : <li key = {index} ><Comment {...item} /></li>
			
		})

		return <ul>{ commentlist }</ul>
		
	}
}

class Comments extends React.Component{

	render(){


		let comments = data.map((comment,commentIndex)=>{

			return (
				<div key = { commentIndex } >
					<CommentDate date = { comment.date } />
					<CommentUl data = { comment.num } />
				</div>
			)
		})

		return <div>{ comments }</div>
	}

}

class CommentBox extends React.Component{
	render(){
		return (
			<div>
				<h2>Comments</h2>
				<Comments />
			</div>
		)
	}
}



ReactDOM.render(
	<CommentBox></CommentBox>,
	document.getElementById("root2")
)






if(module.hot){
	module.hot.accept()
}
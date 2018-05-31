import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.css');

let data = [
    {date: '今天', time: '09:21', name: 'Matt', content: '你好', imgSrc: require("./common/img/matt.jpg")},
    {
        date: '昨天', time: '10:22', name: 'Jenny', content: '你好', imgSrc: require("./common/img/molly.jpg"),
        reply: [
            { time: '11:20',name: 'Sal', content: '你好', imgSrc: require("./common/img/molly.jpg")},
            { time: '12:26',name: 'Jenny', content: '你好', imgSrc: require("./common/img/jenny.jpg")},
            { time: '13:33',name: 'Elliot', content: '你好', imgSrc: require("./common/img/elliot.jpg")},
            { time: '14:45',name: 'Molly', content: '你好', imgSrc: require("./common/img/molly.jpg")}
        ]
    },
    {date: '昨天', time: '11:20', name: 'Molly', content: '你好', imgSrc: require("./common/img/molly.jpg")},
    {date: '今天', time: '11:20', name: 'Elliot', content: '你好', imgSrc: require("./common/img/matt.jpg")},
    {date: '昨天', time: '11:20', name: 'Sal', content: '你好', imgSrc: require("./common/img/molly.jpg")},
    {date: '今天', time: '11:20', name: 'Mike', content: '你好', imgSrc: require("./common/img/matt.jpg")},
    {date: '前天', time: '11:20', name: 'Sal', content: '你好', imgSrc: require("./common/img/molly.jpg")},
    {
        date: '前天', time: '11:20', name: 'Hurley', content: '你好', imgSrc: require("./common/img/matt.jpg"),
        reply: [
            {
                time: '11:20',name: 'Sal', content: '你好', imgSrc: require("./common/img/molly.jpg"),
                reply: [
                    {
                         time: '11:20',name: 'Sal', content: '你好', imgSrc: require("./common/img/molly.jpg"),
                        reply: [
                            { time: '11:20',name: 'Molly', content: '你好', imgSrc: require("./common/img/molly.jpg")}
                        ]
                    },
                    { time: '11:20',name: 'Jenny', content: '你好', imgSrc: require("./common/img/jenny.jpg")},
                    { time: '11:20',name: 'Elliot', content: '你好', imgSrc: require("./common/img/elliot.jpg")},
                    { time: '11:20',name: 'Molly', content: '你好', imgSrc: require("./common/img/molly.jpg")}
                ]
            }
        ]
    },
    {date: '前天',  time: '11:20', name: 'Ben', content: '你好', imgSrc: require("./common/img/matt.jpg")},
    {date: '前天',  time: '11:20', name: 'Jane', content: '你好', imgSrc: require("./common/img/molly.jpg")}
];

class CommentDate extends React.Component{
	render(){
		return <h3>{this.props.date}</h3>
	}
}

class Comment extends React.Component{
	
	render(){
		let {imgSrc,name,time,content} = this.props.data;
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

class CommentList extends Component{
	render(){
		let {data} = this.props;
		
		let reply = data.reply || [];
		
		return reply.length>0 ? <li><Comment data={data} /><CommentUl data = {reply} /></li> : <li><Comment data={data} /></li>
	}
}

class CommentUl extends Component{
	render(){
		let {data} = this.props;
		let commentUl = data.map( (item,index) => <CommentList data={item} key={index} /> )
		return <ul>{commentUl}</ul>
	}
}

class Comments extends Component{

	render(){

		let {data} = this.props;
		
		return(
			<div>
				<CommentDate date = {data[0].date} />
				<CommentUl data={data} />
			</div>
		)
	}
}

class CommentType extends Component{
	render(){
		let {data} = this.props;
		
		const commentArr = [];
		let dateArr = [];

		data.map((item,index)=>{
			dateArr.push(item.date);
		})

		dateArr = [...new Set(dateArr)];
		
		dateArr.map((item,index)=>{
			commentArr[index] = data.filter( (dataItem) => dataItem.date === item )
		})
		
		let commentType = commentArr.map( (item,index) => <Comments data={item} key = {index} /> )
		
		 return <div>{commentType}</div>
		 
	}
}

class CommentWrap extends Component{
	render(){
		return (
			<div>
				<h2>Comments</h2>
				<CommentType data = { this.props.data } />
			</div>
		)
	}
}


ReactDOM.render(
	<CommentWrap data = {data} />,
	document.getElementById("root3")
)

if(module.hot){
	module.hot.accept()
}
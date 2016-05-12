import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'

ReactDOM.render(
  routes,
  document.getElementById('app')
)

/*
class ProfilePic extends React.Component {
  render () {
    return (
      <img src={this.props.imageUrl} />
    )
  }
}

class ProfileName extends React.Component {
  render () {
    return (
      <div>{this.props.name}</div>
    )
  }
}

class Link extends React.Component {
  changeUrl () {
    window.location.replace(this.props.href)
  } // no comma with classes (it's not an object)
  render () {
    return (
      <span 
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={() => this.changeUrl()} // need an arrow fn with classes and parens on fn call
        //onClick={this.changeUrl.bind(this)} // another way (constructor is yet another way)
      >
        {this.props.children}
      </span>
    )
  }
}

class ProfileLink extends React.Component {
  render () {
    return (
      <Link href={`https://github.com/${this.props.username}`}>
        {this.props.username}
      </Link>
    )
  }
}

class Avatar extends React.Component {
  render () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

const USER_DATA = {
  name: 'Dennis Linsley',
  username: 'denlinsley',
  image: 'https://avatars.githubusercontent.com/u/10602179?v=3'
}
*/

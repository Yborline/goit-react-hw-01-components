import Profile from './components/task1/task1'
import user from '../src/listJSON/task1.json'
// import Task2 from './task2/task2'

import data from '../src/listJSON/data.json'
import Statistics from './components/task2/section'

import FriendList from './components/task3/list3'
import friends from './listJSON/friend.json'
// import data from '/путь/к/data.json';

import transactions from './listJSON/array4.json'
import TransactionHistory  from './components/task4/task4'
import { Fragment } from 'react'


export default function App (){
  return (
    <Fragment>
  <Profile 
  username ={user.username}
  tag = {user.tag}
  location = {user.location}
        avatar={user.avatar}
         stats={user.stats} />
      <Statistics title="Upload stats" items={data} />
      <Statistics items={data} />
<FriendList friends = {friends}/>
<TransactionHistory   items = {transactions}/>
</Fragment>
  );
}


import Task1 from './task1/task1'
import infoList from './task1/task1.json'
// import Task2 from './task2/task2'

import infoList2 from './task2/data.json'
import Task2 from './task2/section'

import Task3 from './task3/list3'
import infoList3 from './task3/friend.json'
// import data from '/путь/к/data.json';

import infoList4 from './task4/array4.json'
import Task4 from './task4/task4'

export default function App (){
  return (
    <div>
  <Task1 
  name ={infoList.username}
  tag = {infoList.tag}
  location = {infoList.location}
  avatar = {infoList.avatar}
  followers = {infoList.stats.followers}
  views = {infoList.stats.views}
  likes = {infoList.stats.likes}
  />

<Task2 title="Upload stats" items={infoList2}  />

<Task3 friends = {infoList3}/>
<Task4  items = {infoList4}/>









</div>
  );
}


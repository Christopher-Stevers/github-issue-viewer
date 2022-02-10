import Head from 'next/head'
import Image from 'next/image'
import Issue from '../components/issue'
import styles from '../styles/Home.module.css'
import { gql, useQuery } from "@apollo/client"
const dataQuery =gql`{
  
  user(login: "Christopher-Stevers") {
    issues(orderBy: {direction: ASC, field: CREATED_AT}, first: 10) {
      edges {
        node {
          body
          title
          url
        }
      }
    }
  }

  }
  `
export default function Home() {
  const {data, loading, error} =useQuery(dataQuery);

  if(loading){return <div>loading</div>}
  if(error){return <div>error</div>}
  return (<div className="grid grid-cols-3 w-full justify-center ">
{   data.user.issues.edges.map((elem, index)=>{
return  <Issue key={index} content={elem.node}/>
})}
    </div>
  )
}

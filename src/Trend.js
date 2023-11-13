import React from 'react'
import './Trend.css'
import { Doughnut } from 'react-chartjs-2'
import randomColor from 'randomcolor'

function Trend(props) {
  const bgc = props.songs.map(() => randomColor())
  //   const bc = props.songs.map(() => randomColor());
  const count = props.songs.map((song) => song.count)
  const title = props.songs.map((song) => song.title)

  const data = {
    labels: title,

    datasets: [
      {
        data: count,
        backgroundColor: bgc,
        // borderColor: bc,
        borderWidth: 1
      }
    ]
  }

  const DoughnutChart = () => (
    <>
      <div className="trend">
        <div className="trend__inputContainer">
          <Doughnut className="trend_chart" data={data} />
        </div>
      </div>
    </>
  )
  return (
    <>
      <DoughnutChart />
    </>
  )
}

export default Trend

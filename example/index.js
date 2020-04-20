import Jqsv from '../es/jqsv'
import '../es/common.css'
import { data1, data2 } from './mock/index'
const app = document.getElementById('app')
const el = document.getElementById('el')

function fetchData(sTime) {
  return Promise.resolve({ sTime, ...data1 })
}

function refreshData(sTime) {
  return Promise.resolve({ sTime, ...data2 })
}

async function main() {
  const xhrDataMock = await fetchData(Date.now())
  const JqsvConfig = {
    data: xhrDataMock,
    refresh(updateComponentData) {
      refreshData(Date.now()).then((data) => updateComponentData(data))
    },
    submit({ vaildToken, requestToken, timespan, point }, callback) {
      // featch
      if (point > 83 && point < 100) {
        callback().then(() => {
          // do something
        })
      } else {
        callback('校验值与实际值出现误差')
      }
    }
  }

  let instance = null

  app.addEventListener('click', async function () {
    if (instance === null) return new Jqsv(JqsvConfig, el)
    if (instance.state === 'loaded') {
      instance.show()
    } else {
      instance = new Jqsv(JqsvConfig, el)
    }
  })
}

main()

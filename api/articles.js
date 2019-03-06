import request from '@/utils/request'

export function GET_Articles(params) {
  return request({
     url: '/api/query',
     method: 'get',
     params
  })
}
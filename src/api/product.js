import request from '@/utils/request'

export function getList(pageNum,pageSize) {
  return request({
    url: `/products?pageNum=${pageNum}&pageSize=${pageSize}`,
    method: 'get',
    
  })
}

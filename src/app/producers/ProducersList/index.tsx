'use client'
import { rootStore } from '@/app/layout'
import ProducersListWithVM from './ProducersListWithVM'

const ProducersList = () => <ProducersListWithVM rootStore={rootStore} />

export default ProducersList

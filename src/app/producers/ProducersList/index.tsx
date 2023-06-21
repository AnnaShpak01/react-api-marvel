'use client'
import { rootStore } from '@/app/layout'
import withVM from '@/lib/withVM'

import ProducersList from './ProducersList'
import ProducersListVM from './ProducersListVM'

const ProducersListWithVM = withVM(ProducersList, ProducersListVM)
const ProducersListWithStore = () => <ProducersListWithVM rootStore={rootStore} />

export default ProducersListWithStore

'use client'
import { rootStore } from '@/app/layout'
import ProducersStore from '@/stores/ProducersStore'
import RootStore from '@/stores/RootStore'
import * as mobx from 'mobx'

export default class ProducersListVM {
  producersStore: ProducersStore
  rootStore: RootStore

  init() {
    this.producersStore.getProducersList()
  }

  constructor() {
    this.rootStore = rootStore
    this.producersStore = rootStore.producersStore
    this.init()
    mobx.makeAutoObservable(this, { rootStore: false }, { autoBind: true, deep: false })
  }
}

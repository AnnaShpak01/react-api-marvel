import RootStore from '@/stores/RootStore'
import * as mobx from 'mobx'

interface IProducersListVMProps {
  pending: boolean
}

export default class ProducersListVM implements IProducersListVMProps {
  pending = false
  rootStore: RootStore

  /**
   * Helper to set values through mobx actions.
   */
  set(prop: keyof IProducersListVMProps, value: any) {
    ;(this[prop] as any) = value
  }

  /**
   * Helper to assign multiple props values through a mobx action.
   */
  assign(props: { [key: string]: any }) {
    Object.assign(this, props)
  }

  async init() {}

  constructor({ rootStore }: { rootStore: RootStore }) {
    this.rootStore = rootStore
    mobx.makeAutoObservable(this, { rootStore: false }, { autoBind: true, deep: false })
    this.init()
  }
}

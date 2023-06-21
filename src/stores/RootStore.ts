import * as mobx from 'mobx'
import ProducersStore from './producersStore'

interface IRootStoreProps {
  error: Error | null
  pending: boolean
  route: string
}

export default class RootStore implements IRootStoreProps {
  error: Error | null = null
  pending = false
  producersStore: ProducersStore
  route = ''

  /**
   * Helper to set values through mobx actions.
   */
  set(prop: keyof IRootStoreProps, value: any) {
    ;(this[prop] as any) = value
  }

  /**
   * Helper to assign multiple props values through a mobx action.
   */
  assign(props: Partial<IRootStoreProps>) {
    Object.assign(this, props)
  }

  public async init() {
    this.route = 'init'
  }

  constructor() {
    this.producersStore = new ProducersStore(this)
    mobx.makeAutoObservable(this, {}, { autoBind: true, deep: false })
  }
}

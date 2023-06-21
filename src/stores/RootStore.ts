import * as mobx from 'mobx'
import ProducersStore from './ProducersStore'

interface IRootStoreProps {
  error: Error | null
  pending: boolean
  route: string
}

export default class RootStore implements IRootStoreProps {
  error: Error | null = null
  pending = true
  producersStore: ProducersStore
  route = ''

  /**
   * Reset error state to null for any model that might have an error.
   * rootStore.error computed value will be null as a result.
   */
  clearError() {
    this.set('error', null)
    this.producersStore.clearError()
  }

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

  setError(error: Error) {
    this.error = error
  }

  init() {
    this.route = 'init'
    this.pending = false
  }

  constructor() {
    this.producersStore = new ProducersStore(this)
    mobx.makeAutoObservable(this, { producersStore: false }, { autoBind: true, deep: false })
  }
}

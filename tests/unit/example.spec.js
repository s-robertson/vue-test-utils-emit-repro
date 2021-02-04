import { mount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import MyButton from '@/components/MyButton.vue'
import MyButtonComposition from '@/components/MyButtonComposition.vue'

describe('MyButton.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueCompositionApi)

  it('emits an event when mounted', async () => {
    const wrapper = await mount(MyButton, {
      localVue,
    })
    expect(wrapper.emitted('mounted').length).toBe(1)
  })

  it('emits an event when clicked', async () => {
    const wrapper = await mount(MyButton, {
      localVue,
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('clicked').length).toBe(1)
  })
})

describe('MyButtonComposition.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueCompositionApi)

  it('emits an event when mounted', async () => {
    const wrapper = await mount(MyButtonComposition, {
      localVue,
    })
    expect(wrapper.emitted('mounted').length).toBe(1)
  })

  it('emits an event when clicked', async () => {
    const wrapper = await mount(MyButtonComposition, {
      localVue,
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('clicked').length).toBe(1)
  })
})

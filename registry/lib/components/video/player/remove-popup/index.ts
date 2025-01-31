import { defineComponentMetadata } from '@/components/define'
import { addComponentListener } from '@/core/settings'
import { playerUrls } from '@/core/utils/urls'

const name = 'removePlayerPopup'
export const component = defineComponentMetadata({
  name,
  entry: ({ settings, metadata }) => {
    const { options } = settings
    const { kebabCase } = lodash
    Object.keys(options).forEach(optionName => {
      addComponentListener(
        `${metadata.name}.${optionName}`,
        (value: boolean) => {
          document.body.classList.toggle(
            `${kebabCase(metadata.name)}-${kebabCase(optionName)}`,
            value,
          )
        },
        true,
      )
    })
  },
  instantStyles: [
    {
      name,
      style: () => import('./remove-popup.scss'),
    },
  ],
  displayName: '删除视频弹窗',
  tags: [componentsTags.video, componentsTags.style],
  description: {
    'zh-CN': '删除视频播放器中出现的各种弹窗, 类别可在选项中分别选择.',
  },
  urlInclude: playerUrls,
  options: {
    votes: {
      defaultValue: false,
      displayName: '投票',
    },
    relatedVideos: {
      defaultValue: true,
      displayName: '关联视频',
    },
    comboLikes: {
      defaultValue: true,
      displayName: '关注/三连',
    },
    rates: {
      defaultValue: true,
      displayName: '评分',
    },
    reservations: {
      defaultValue: true,
      displayName: '预告',
    },
  },
})

/* eslint-disable i18next/no-literal-string */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/display-name */
// @ts-ignore

import React, { useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
  Editor,
  Transforms,
  createEditor,
  type Descendant,
  Element as SlateElement,
  type BaseEditor
} from 'slate'

import { type Ref, type PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

interface BaseProps {
  className: string
  [key: string]: unknown
}
type OrNull<T> = T | null

export const EditorValue = React.forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<
    {
      value: any
    } & BaseProps
    >,
    ref: Ref<OrNull<null>>
  ) => {
    const textLines = value.document.nodes
      .map((node: { text: any }) => node.text)
      .toArray()
      .join('\n')
    return (
      <div
      // @ts-ignore
        ref={ref}
        {...props}
      >
        <div
        >
          Slats value as text
        </div>
        <div
        >
          {textLines}
        </div>
      </div>
    )
  }
)

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      // @ts-ignore
      ref={ref}
    />
  )
)

export const Instruction = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <div
      {...props}
      // @ts-ignore
      ref={ref}
    />
  )
)

export const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <div
      {...props}
      data-test-id="menu"
      // @ts-ignore
      ref={ref}
    />
  )
)

export const Portal = ({ children }: any) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null
}

export const Toolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <Menu
      {...props}
      // @ts-ignore
      ref={ref }
    />
  )
)

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

export const RichTextEditor = () => {
  const renderElement = useCallback((props: JSX.IntrinsicAttributes & { attributes: any; children: any; element: any }) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: JSX.IntrinsicAttributes & { attributes: any; children: any; leaf: any }) => <Leaf {...props} />, [])
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} value={initialValue}>
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        <BlockButton format="left" icon="format_align_left" />
        <BlockButton format="center" icon="format_align_center" />
        <BlockButton format="right" icon="format_align_right" />
        <BlockButton format="justify" icon="format_align_justify" />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey as never]
              toggleMark(editor, mark)
            }
          }
        }}
      />
    </Slate>
  )
}

const toggleBlock = (editor: BaseEditor, format: string) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n: any) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      // @ts-ignore
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true
  })
  let newProperties: Partial<SlateElement>

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor: BaseEditor, format: any, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        // @ts-ignore
        n[blockType] === format
    })
  )

  return !!match
}

const isMarkActive = (editor: BaseEditor, format: string | number) => {
  // @ts-ignore
  const marks = Editor.marks(editor)
  // @ts-ignore
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }: any) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}
const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}
const BlockButton = ({ format, icon }: any) => {
  const editor = useSlate()
  return (
    <div
      
      onMouseDown={(event: { preventDefault: () => void }) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </div>
  )
}
// @ts-ignore
const MarkButton = ({ format, icon }: any) => {
  const editor = useSlate()
  return (
    // @ts-ignore
    <div
     
      onMouseDown={(event: { preventDefault: () => void }) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </div>
  )
}

const initialValue: Descendant[] = [
  {
    children: [
      { text: 'This is editable ' },
      { text: 'rich' },
      { text: ' text, ' },
      { text: 'much' },
      { text: ' better than a ' },
      { text: '<textarea>' },
      { text: '!' }
    ]
  },
  {
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text "
      },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:'
      }
    ]
  },
  {
    children: [{ text: 'A wise quote.' }]
  },
  {
    children: [{ text: 'Try it out for yourself!' }]
  }
]

export default RichTextEditor

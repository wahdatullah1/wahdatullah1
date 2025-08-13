import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Callout from './mdx/callout';
import ProsCons from './mdx/pros-cons';
import CodeTabs from './mdx/code-tabs';

const components = { Callout, ProsCons, CodeTabs };

export default function MdxRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />;
}

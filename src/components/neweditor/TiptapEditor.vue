<template>
	<section class="border border-maingreen rounded-lg">

		<!-- Título da notícia -->
		<div class="p-4 flex flex-col gap-1">
			<label for="" class="text-2xl underline underline-offset-2 decoration-4 decoration-maingreen ">Título</label>
			<input class="w-full border-none py-3 transition duration-150 ease-in-out focus:outline-none rounded-md focus:ring-2 focus:ring-maingreen"
				type="text" placeholder="Dê um título pra sua notícia..." v-model="newNew.title"/>
		</div>
		<div id="tiptap" class="divide-y divide-maingreen w-full">
			<div id="tiptap-toolbar" class="divide-x divide-maingreen">

				<!-- Undo / Redo -->
				<TiptapToolbarGroup>
					<TiptapToolbarButton label="Undo" @click="editorInstance?.chain().focus().undo().run()"
						:disabled="!editorInstance?.can().chain().focus().undo().run()">
						<IconArrowBackUp class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Redo" @click="editorInstance?.chain().focus().redo().run()"
						:disabled="!editorInstance?.can().chain().focus().redo().run()">
						<IconArrowForwardUp class="h-5 w-5" />
					</TiptapToolbarButton>
				</TiptapToolbarGroup>
				
				<!-- Heading 1,2 e 3 -->
				<TiptapToolbarGroup>
					<TiptapToolbarButton label="Heading 1" :is-active="editorInstance?.isActive('heading', { level: 1 })"
						@click="editorInstance?.chain().focus().toggleHeading({ level: 1 }).run()">
						<IconH1 class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Heading 2" :is-active="editorInstance?.isActive('heading', { level: 2 })"
						@click="editorInstance?.chain().focus().toggleHeading({ level: 2 }).run()">
						<IconH2 class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Heading 3" :is-active="editorInstance?.isActive('heading', { level: 3 })"
						@click="editorInstance?.chain().focus().toggleHeading({ level: 3 }).run()">
						<IconH3 class="h-5 w-5" />
					</TiptapToolbarButton>
				</TiptapToolbarGroup>
				
				<!-- Font bold, Italic, Underline and Strikethrough -->
				<TiptapToolbarGroup>
					<TiptapToolbarButton label="Bold" :is-active="editorInstance?.isActive('bold')"
						@click="editorInstance?.chain().focus().toggleBold().run()">
						<IconBold class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Italic" :is-active="editorInstance?.isActive('italic')"
						@click="editorInstance?.chain().focus().toggleItalic().run()">
						<IconItalic class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Underline" :is-active="editorInstance?.isActive('underline')"
						@click="editorInstance?.chain().focus().toggleUnderline().run()">
						<IconUnderline class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Strikethrough" :is-active="editorInstance?.isActive('strike')"
						@click="editorInstance?.chain().focus().toggleStrike().run()">
						<IconStrikethrough class="h-5 w-5" />
					</TiptapToolbarButton>
				</TiptapToolbarGroup>
				
				<!-- Ordered / Unordered list -->
				<TiptapToolbarGroup>
					<TiptapToolbarButton label="Bold" :is-active="editorInstance?.isActive('bulletList')"
						@click="editorInstance?.chain().focus().toggleBulletList().run()">
						<IconListDetails class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Bold" :is-active="editorInstance?.isActive('orderedList')"
						@click="editorInstance?.chain().focus().toggleOrderedList().run()">
						<IconListNumbers class="h-5 w-5" />
					</TiptapToolbarButton>
				</TiptapToolbarGroup>
				
				<!-- Text color -->
				<TiptapToolbarGroup>
					<input type="color" @input="editorInstance?.chain().focus().setColor($event.target.value).run()"
						:value="editorInstance?.getAttributes('textStyle').color ?? '#000000'">
				</TiptapToolbarGroup>
				
				<!-- Text align -->
				<TiptapToolbarGroup>
					<button @click="editorInstance?.chain().focus().setTextAlign('left').run()"
						:class="{ 'is-active': editorInstance?.isActive({ textAlign: 'left' }) }">
						<IconAlignLeft />
					</button>
					<button @click="editorInstance?.chain().focus().setTextAlign('center').run()"
						:class="{ 'is-active': editorInstance?.isActive({ textAlign: 'center' }) }">
						<IconAlignCenter />
					</button>
					<button @click="editorInstance?.chain().focus().setTextAlign('right').run()"
						:class="{ 'is-active': editorInstance?.isActive({ textAlign: 'right' }) }">
						<IconAlignRight />
					</button>
				</TiptapToolbarGroup>
				
				<!-- Font family select -->
				<TiptapToolbarGroup>
					<button	class="text-black focus:ring-2 focus:outline-none focus:ring-maingreen rounded-lg text-sm flex items-center"
						type="button" id="dropdownDefaultButton" data-dropdown-toggle="dropdown">{{ currFont }}
						<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
							viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="m1 1 4 4 4-4" />
						</svg>
					</button>
	
					<div id="dropdown"
						class="z-10 hidden bg-white rounded-md shadow w-44 dark:bg-gray-700">
						<ul class="p-2 text-sm flex flex-col gap-1" aria-labelledby="dropdownDefaultButton">
							<li class="p-2 hover:bg-maingreen hover:text-white transition duration-150">
								<button @click="editorInstance?.chain().focus().setFontFamily('Inter').run(); currFont = 'Inter' "
									:class="{ 'is-active': editorInstance?.isActive('textStyle', { fontFamily: 'Inter' }) }" class="w-full">
									Inter
								</button>
							</li>
							<li class="p-2 hover:bg-maingreen hover:text-white transition duration-150">
								<button
									@click="editorInstance?.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run(); currFont = 'Comic Sans MS, Comic Sans'"
									:class="{ 'is-active': editorInstance?.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) }" class="w-full">
									Comic Sans
								</button>
							</li>
							<li class="p-2 hover:bg-maingreen hover:text-white transition duration-150">
								<button @click="editorInstance?.chain().focus().setFontFamily('serif').run(); currFont = 'Serif' "
									:class="{ 'is-active': editorInstance?.isActive('textStyle', { fontFamily: 'serif' }) }" class="w-full">
									Serif
								</button>
							</li>
							<li class="p-2 hover:bg-maingreen hover:text-white transition duration-150">
								<button @click="editorInstance?.chain().focus().setFontFamily('monospace').run(); currFont = 'Monospace'"
									:class="{ 'is-active': editorInstance?.isActive('textStyle', { fontFamily: 'monospace' }) }" class="w-full">
									Monospace
								</button>
							</li>
							<li class="p-2 hover:bg-maingreen hover:text-white transition duration-150">
								<button @click="editorInstance?.chain().focus().setFontFamily('cursive').run(); currFont = 'Cursive'"
									:class="{ 'is-active': editorInstance?.isActive('textStyle', { fontFamily: 'cursive' }) }" class="w-full">
									Cursive
								</button>
							</li>
							<li class="p-2 hover:bg-maingreen hover:text-white transition duration-150">
								<button @click="editorInstance?.chain().focus().unsetFontFamily().run(); currFont = 'Unset'" class="w-full">
									Unset font family
								</button>
							</li>
						</ul>
					</div>
				</TiptapToolbarGroup>
				
				<!-- Link, Image, Quote, Table, Horizontal row -->
				<TiptapToolbarGroup>
					<TiptapToolbarButton label="Link" @click="openLinkDialog" :is-active="editorInstance?.isActive('link')">
						<IconLink class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Image" @click="showAddImageDialog = true">
						<IconPhoto class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Blockquote" :is-active="editorInstance?.isActive('blockquote')"
						@click="editorInstance?.chain().focus().toggleBlockquote().run()">
						<IconBlockquote class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Table" @click="showAddTableDialog = true">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Youtube" @click="showAddYoutubeDialog = true">
						<IconMovie class="h-5 w-5" />
					</TiptapToolbarButton>
	
					<TiptapToolbarButton @click="editorInstance?.chain().focus().setHorizontalRule().run()"
						label="Horizontal Line">
						<IconMinus class="h-5 w-5" />
					</TiptapToolbarButton>
				</TiptapToolbarGroup>
				
				<TiptapToolbarGroup v-if="editorInstance?.isActive('table')">
					<TiptapToolbarButton @click="editorInstance?.commands.deleteTable()" label="Remove table">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Add column before" @click="editorInstance?.commands.addColumnBefore()">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Add column after" @click="editorInstance?.commands.addColumnAfter()">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Remove column" @click="editorInstance?.commands.deleteColumn()">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Add row before" @click="editorInstance?.commands.addRowBefore()">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton @click="editorInstance?.commands.addRowAfter()" label="Add row after">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Remove row" @click="editorInstance?.commands.deleteRow()">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z" />
						</svg>
					</TiptapToolbarButton>
	
					<TiptapToolbarButton label="Merge or split cell" @click="editorInstance?.commands.mergeOrSplit()">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z" />
						</svg>
					</TiptapToolbarButton>
				</TiptapToolbarGroup>
			</div>
	
			<div class="flex flex-col px-4 prose">
				<EditorContent class="editor-content" :editor="editorInstance" />
				<div class="border-t border-maingreen py-3 text-start text-sm text-gray-500">
					{{ editorInstance?.storage.characterCount.characters() }} caracteres,
					{{ editorInstance?.storage.characterCount.words() }} palavras
				</div>
			</div>
	
			<div class="px-4 py-3 text-sm text-gray-700 flex justify-center">
				<button
					class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
					@click.prevent="createNew()" type="submit">Salvar</button>
			</div>
	
			<TiptapLinkDialog v-if="showLinkDialog" :show="showLinkDialog" :current-url="currentLinkInDialog"
				:editor="editor" @close="showLinkDialog = false" @update="updateLink" />
	
			<TiptapVideoDialog v-if="showAddYoutubeDialog" :show="showAddYoutubeDialog" @insert="insertYoutubeVideo"
				@close="showAddYoutubeDialog = false" />
	
			<TiptapTableDialog v-if="showAddTableDialog" :show="showAddTableDialog" @close="showAddTableDialog = false"
				@insert="insertTable" />
	
			<TiptapImageDialog v-if="showAddImageDialog" :show="showAddImageDialog" @close="showAddImageDialog = false"
				@insert="insertImage" />
		</div>
	</section>
</template>

<script>
	import { Editor, EditorContent } from "@tiptap/vue-3";
	import { IconArrowBackUp, IconArrowForwardUp, IconBlockquote,
		IconBold, IconH1, IconH2, IconH3, IconItalic, IconLink,
		IconListDetails, IconListNumbers, IconMovie, IconPhoto,
		IconStrikethrough, IconUnderline, IconMinus, IconAlignLeft,
		IconAlignRight, IconAlignCenter	} from "@tabler/icons-vue";

	import TiptapToolbarButton from "@/components/neweditor/nodes/TiptapToolbarButton.vue";
	import TiptapToolbarGroup from "@/components/neweditor/nodes/TiptapToolbarGroup.vue";
	import Paragraph from "@tiptap/extension-paragraph";
	import Document from "@tiptap/extension-document";
	import Text from "@tiptap/extension-text";
	import History from "@tiptap/extension-history";
	import Heading from "@tiptap/extension-heading";
	import Bold from "@tiptap/extension-bold";
	import Italic from "@tiptap/extension-italic";
	import Underline from "@tiptap/extension-underline";
	import Strike from "@tiptap/extension-strike";
	import ListItem from "@tiptap/extension-list-item";
	import BulletList from "@tiptap/extension-bullet-list";
	import OrderedList from "@tiptap/extension-ordered-list";
	import Link from "@tiptap/extension-link";
	import Dropcursor from "@tiptap/extension-dropcursor";
	import Gapcursor from "@tiptap/extension-gapcursor";
	import TextStyle from '@tiptap/extension-text-style'
	import TextAlign from '@tiptap/extension-text-align'
	import FontFamily from '@tiptap/extension-font-family'

	import { Color } from '@tiptap/extension-color'
	import { createNew } from '@/services/NewService.js';
	import { Blockquote } from "@tiptap/extension-blockquote";
	import { HardBreak } from "@tiptap/extension-hard-break";
	import { CharacterCount } from "@tiptap/extension-character-count";
	import { Youtube } from "@tiptap/extension-youtube";
	import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
	import { Table } from "@tiptap/extension-table";
	import { TableHeader } from "@tiptap/extension-table-header";
	import { TableRow } from "@tiptap/extension-table-row";
	import { TableCell } from "@tiptap/extension-table-cell";

	import TiptapLinkDialog from "@/components/neweditor/nodes/TiptapLinkDialog.vue";
	import TiptapVideoDialog from "@/components/neweditor/nodes/TiptapVideoDialog.vue";
	import TiptapTableDialog from "@/components/neweditor/nodes/TiptapTableDialog.vue";
	import TiptapImageDialog from "@/components/neweditor/nodes/TiptapImageDialog.vue";
	
	import CustomImage from "./CustomImage.js";
	import router from '@/router/index.js'

	export default {
		name:'TiptapEditor',
		components: {
			EditorContent, TiptapToolbarButton, TiptapToolbarGroup,
			TiptapLinkDialog, TiptapVideoDialog, TiptapTableDialog,
			TiptapImageDialog, IconArrowBackUp, IconArrowForwardUp,
			IconBlockquote, IconBold, IconH1, IconH2, IconH3,
			IconItalic, IconLink, IconListDetails, IconListNumbers,
			IconMovie, IconPhoto, IconStrikethrough, IconUnderline,
			IconMinus, IconAlignLeft, IconAlignRight,
			IconAlignCenter
		},
		data() {
			return {
				currentLinkInDialog: "",
				showLinkDialog: null,
				showAddYoutubeDialog: false,
				showAddTableDialog: false,
				showAddImageDialog: false,
				editorInstance: null,
				currFont: 'Selecione uma fonte',
				newNew: {
					title: '',
					code: null,
					isMain: false,
					tip: 'Novidade',
					img: {
						name: 'cover',
						code: null
					},
				},
				setCover: false
			};
		},
		beforeMount() {
			this.editorInstance = new Editor({
				content: `<p>Seu conteúdo aqui.</p>`,
				editorProps: {
					attributes: {
						class: "blog",
					},
				},
				extensions: [Paragraph, Document, Text, History, TextStyle,
					TextAlign.configure({
						types: ['heading', 'paragraph'],
					}),
					Heading.configure({ levels: [1, 2, 3], }), Bold, Italic, Underline, Strike, ListItem, BulletList, OrderedList,
					Link.configure({ openOnClick: false, }), HardBreak, Blockquote, CharacterCount, Youtube,
					Dropcursor.configure({ width: 2, color: "#2563eb", }), HorizontalRule, FontFamily,
					Table.configure({ resizable: false, allowTableNodeSelection: true, }),
					TableRow, TableHeader, TableCell, Gapcursor, CustomImage,
					Color.configure({ types: ['textStyle'] })
				],
				onUpdate: ({ editor }) => {
					this.newNew.code = editor.getHTML();
				},
			});

			setTimeout(() => {
				this.newNew.code = this.editorInstance?.getHTML();
			}, 250);
		},
		beforeUnmount() {
			this.editorInstance?.destroy();
		},
		methods: {
			openLinkDialog() {
				this.currentLinkInDialog = this.editorInstance?.getAttributes("link").href;
				this.showLinkDialog = true;
			},
			showCreateSuccess(){
				let div = document.getElementById("success-register-alert-new")
				div.style.display = "flex"
			},
			createNew() {
				console.log(this.newNew)

				createNew(this.newNew).then((response) => {
					console.log(response)
					this.showCreateSuccess()
				}).finally(() => {
					setInterval(() => {
						router.push('/news').then(() => {
							window.location.reload();
						});
					}, 2500)
				})
			},
			updateLink(value) {
				console.log(value)
				if (!value) {
					this.editorInstance?.chain().focus().extendMarkRange("link").unsetLink().run();
					return;
				}

				this.editorInstance
					?.chain().focus().extendMarkRange("link").setLink({ href: value }).run();
			},
			insertImage(url) {
				if(!this.setCover){
					this.newNew.img.code = url
					this.setCover = true
				}
				this.editorInstance?.chain().focus().setImage({ src: url }).run();
			},
			insertYoutubeVideo(url) {
				this.editorInstance?.commands.setYoutubeVideo({
					src: url,
					width: 400,
					height: 300,
				});
			},
			insertTable(table) {
				this.editorInstance?.chain().focus().insertTable({
					rows: table.rows,
					cols: table.columns,
					withHeaderRow: table.withHeader,
				}).run();
			}
		}
	};
</script>

<style>
.editor-content a {
  color: blue;
  text-decoration: none;
}

.editor-content a:hover {
	text-decoration: underline;
}
</style>
import type { Note } from "@/types/note";

// TODO: 將此處的 mock 數據替換為實際的筆記內容
// 建議未來可以改用 YAML 檔案管理
export const notes: Note[] = [
  {
    id: "1",
    title: "學習筆記範例",
    content: "這是第一則筆記的內容...",
    subject: "數學",
    category: "代數",
    date: "2024-11-07T00:00:00Z",
  },
  {
    id: "2",
    title: "物理學習心得",
    content: "這是第二則筆記的內容...",
    subject: "物理",
    category: "力學",
    date: "2024-11-06T00:00:00Z",
  },
];


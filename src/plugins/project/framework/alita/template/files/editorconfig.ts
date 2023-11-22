import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.editorconfig',
    '',
    `
    # http://editorconfig.org
    root = true
    
    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    
    [*.md]
    trim_trailing_whitespace = false
    
    [Makefile]
    indent_style = tab
 `,
  );

  return [[], file];
}

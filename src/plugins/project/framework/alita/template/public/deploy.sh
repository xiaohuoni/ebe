#!/bin/bash

set -eo pipefail
[[ "$DEBUG" == "true" ]] && set -x

export LANG=en_US.UTF-8

# 根据参数设置环境变量，不关心参数顺序
for arg in "$@"; do
  # 自定义环境变量
  if [[ "$arg" == *=* ]]; then
    echo export "$arg"
    export "${arg?}"
  else
    echo "Unknown option: $arg" >&2
  fi
done

log_info() {
  echo "[$(date +'%Y-%m-%d %H:%M:%S.%N')] $@"
}

log_info "Start installing pnpm..."
# 安装 pnpm
# 避免重复执行
# if [[ ! -h ~/.pnpm-state/pnpm-state.json ]]; then
#   curl -fsSL https://get.pnpm.io/install.sh | PNPM_VERSION=7.0.0-beta.2 sh -
# fi

log_info "Start installing packages..."

yarn

log_info "Start building..."

yarn build

log_info "Build packages successfully"

log_info "Start building app..."

# 执行产物编译
# pnpm run build:app

## 产物输出路径为 packages/app/dist

log_info "Build finished successfully"
## 产物输出路径为 packages/app/dist

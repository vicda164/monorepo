# monorepo
monorepo with shared components between projects using yarn

# instructions

From root of the project
1) yarn install
2) yarn workspace @monorepo/common tsc [--watch] //build code in common
3) yarn workspace project-a start

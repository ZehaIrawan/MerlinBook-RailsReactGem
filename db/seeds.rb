# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  Book.create(
    title: 'The Great Gatsby',
    category: 'Action',
    author: 'F. Scott Fitzgerald'
  )
  Book.create(
    title: 'The Grapes of Wrath',
    category: 'Action',
    author: 'John Steinbeck'
  )
  Book.create(
    title: 'Nineteen Eighty-Four',
    category: 'Sci-Fi',
    author: 'George Orwell'
  )

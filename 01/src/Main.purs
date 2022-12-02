module Main where

import Prelude

import Data.Array (reverse, sort, take)
import Data.Foldable (sum)
import Data.Int (fromString)
import Data.Maybe (Maybe)
import Data.String (Pattern(..), split)
import Data.Traversable (traverse)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow)
import Node.Encoding (Encoding(..))
import Node.FS.Aff (readTextFile)

getSumOfNLargest ∷ String → Int → Maybe Int
getSumOfNLargest s n = sort >>> reverse >>> take n >>> sum <$> numberArrays
  where
  numberArrays = traverse sumFromNumbersString $ split (Pattern "\n\n") s
  sumFromNumbersString = split (Pattern "\n") >>> traverse fromString >>> map sum

main :: Effect Unit
main = launchAff_ do
  input <- readTextFile UTF8 "input"
  liftEffect $ logShow $ getSumOfNLargest input 3